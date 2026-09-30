import { ReactNode } from 'react'
import Reveal from '../components/Reveal'
import Shot from '../components/Shot'
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
    <a className="back" href="#/">← 전체 프로젝트</a>
    <h1>{p.title}</h1>
    <p className="lead">{p.oneLiner}</p>
    <dl className="meta">
      <div><dt>기간</dt><dd>{p.period}</dd></div>
      <div><dt>팀</dt><dd>{p.team}</dd></div>
      <div><dt>내 역할</dt><dd>{p.role}</dd></div>
      <div><dt>기술</dt><dd>{p.stack.join(', ')}</dd></div>
    </dl>
    <div className="shots"><Shot src={p.image} label="대표 화면" /><Shot label="화면 2" /><Shot label="화면 3" /></div>

    {p.overview && <Block title="Project Overview"><p>{p.overview}</p>{p.problem && <p className="muted">{p.problem}</p>}</Block>}
    {p.role_list && <Block title="My Role"><List items={p.role_list} /></Block>}
    {p.uxui && <Block title="UX/UI"><List items={p.uxui} /></Block>}
    {p.frontend && <Block title="Frontend"><List items={p.frontend} /></Block>}
    {p.features && <Block title="Key Features">
      <div className="feat">{p.features.map(f => <div key={f.name}><Shot src={f.image} label={f.name} ratio="9/16" /><h3>{f.name}</h3><p>{f.desc}</p></div>)}</div>
    </Block>}
    {p.challenges && <Block title="Technical Challenges">
      {p.challenges.map(c => <div className="chal" key={c.title}><h3>{c.title}</h3><p>{c.body}</p></div>)}
    </Block>}
    {p.result && <Block title="Result"><List items={p.result} />{p.learned && <p>{p.learned}</p>}</Block>}
    {p.github && <p><a className="mail" href={p.github} target="_blank" rel="noreferrer">GitHub에서 보기</a></p>}

    <a className="next" href={'#/project/' + next.slug}><span className="muted">다음 프로젝트</span><strong>{next.title}</strong></a>
  </main>
}
