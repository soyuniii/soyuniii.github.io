import { ReactNode } from 'react'
import Reveal from '../components/Reveal'
import FeatureCarousel from '../components/FeatureCarousel'
import { projects } from '../data/content'

const Block = ({ title, children }: { title: string; children: ReactNode }) =>
  <Reveal><section className="blk"><h2>{title}</h2><div>{children}</div></section></Reveal>
const List = ({ items }: { items: string[] }) => <ul className="list">{items.map(i => <li key={i}>{i}</li>)}</ul>

export default function ProjectDetail({ slug }: { slug: string }) {
  const p = projects.find(x => x.slug === slug)
  const i = projects.findIndex(x => x.slug === slug)
  if (!p) return <main className="detail"><a href="#/">← 홈으로</a><p>프로젝트를 찾을 수 없습니다.</p></main>
  const next = projects[(i + 1) % projects.length]
  return <main className="detail">
    <div className='detail-header'>
    <a className="back" href="#/">←</a>
    <div className='store-link'>
    {p.app_link && <p><a className="mail" href={p.app_link} target="_blank" rel="noreferrer">App Store</a></p>}
    {p.play_link && <p><a className="mail" href={p.play_link} target="_blank" rel="noreferrer">Play Store</a></p>}
     {p.github && <p><a className="mail" href={p.github} target="_blank" rel="noreferrer">GitHub</a></p>}
    </div>
    </div>
    <h1>{p.title}</h1>
    <p className="lead">{p.oneLiner}</p>

    <dl className="meta">
      <div><dt>기간</dt><dd>{p.period}</dd></div>
      <div><dt>팀 구성</dt><dd>{p.team}</dd></div>
      <div><dt>내 역할</dt><dd>{p.role}</dd></div>
      <div><dt>기술</dt><dd>{p.stack.join(', ')}</dd></div>
    </dl>


    {/* 캐러셀은 이미지가 커야 하므로 좌측 제목 컬럼 없이 전체 폭으로 배치 */}
    {p.features && <Reveal><section className="feat-sec">
      <h2>Key Features</h2>
      <FeatureCarousel items={p.features} />
    </section></Reveal>}

    {p.overview && <Block title="Project Overview"><p>{p.overview}</p>{p.problem && <p className="muted">{p.problem}</p>}</Block>}
    {p.uxui && <Block title="UX/UI"><List items={p.uxui} /></Block>}
    {p.development && <Block title="Development"><List items={p.development} /></Block>}
    {p.challenges && <Block title="Challenges">
      {p.challenges.map(c => <div className="chal" key={c.title}><h3>{c.title}</h3><p>{c.body}</p></div>)}
    </Block>}
    {p.result && <Block title="What I learned"><h3>{p.result}</h3>{p.learned && <p>{p.learned}</p>}</Block>}
    {p.havetodo && <Block title="Have to do">{p.havetodo && <p>{p.havetodo}</p>}</Block>}
   

    <a className="next" href={'#/project/' + next.slug} target="_blank"><span className="muted">다음 프로젝트</span><h2>{next.title}</h2></a>
  </main>
}