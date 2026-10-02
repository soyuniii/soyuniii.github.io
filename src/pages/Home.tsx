import { useEffect, useState } from 'react'
import Flowers from '../components/Flowers'
import portrait from '../assets/portrait.png'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { profile, strengths, projects, experience, skills, awards, education, certs } from '../data/content'

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { // 스크롤 값을 CSS 변수로 전달해 구름·사진 패럴랙스에 사용
    let raf = 0
    const f = () => { raf = 0; document.documentElement.style.setProperty('--sy', String(scrollY)); setScrolled(scrollY > 24) }
    const on = () => { if (!raf) raf = requestAnimationFrame(f) }
    f(); addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  return <>
    <header className={'nav' + (scrolled ? ' on' : '')}>
      <strong>{profile.logo}</strong>
      <nav>{[['project', 'Project'], ['experience', 'Experience'], ['skills', 'Skills'], ['contact', 'Contact']].map(([id, l]) =>
        <button key={id} onClick={() => go(id)}>{l}</button>)}</nav>
    </header>

    <main>
      <section className="hero">
        <div className="clouds" aria-hidden="true"><i className="cloud c1" /><i className="cloud c2" /><i className="cloud c3" /></div>
        <svg className="hill back" viewBox="0 0 1440 240" preserveAspectRatio="none" aria-hidden="true"><path fill="#8FAF72" d="M0 70C220 20 460 30 700 70S1180 120 1440 40V240H0Z" /></svg>
        <Flowers className="hero-flowers" count={46} seed={3} />

        <div className="hero-inner">
          <div className="hero-text">
            <h1>{profile.headline.map((l, i) => <span key={i} style={{ animationDelay: 150 + i * 140 + 'ms' }}>{l}</span>)}</h1>
            <p className="lead">{profile.intro}</p>
          </div>
  <div className="hero-side hero-side-left">
    <div className="hero-top">
      <div className="photo">
        <img src={portrait} alt="햇빛을 가리고 웃는 모습" />
      </div>
      <div className="hero-meta">
        <h2 className="name">{profile.name}</h2>
        <p className="role">{profile.role}</p>
      </div>
    </div>
            <div className='hero-below'>
              <ul className="chips">{profile.keywords.map(k => <li key={k}>{k}</li>)}</ul>
              <div className="links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={'mailto:' + profile.email}>{profile.email}</a>
            </div>
            </div>
          </div>

          
        </div>
        <svg className="hill front" viewBox="0 0 1440 240" preserveAspectRatio="none" aria-hidden="true"><path fill="#B7C98A" d="M0 130C260 80 520 150 800 120S1240 70 1440 110V240H0Z" /></svg>
      </section>

      <Section id="about" title="이런 개발자입니다" tone="grass">
        <div className="strengths">{strengths.map(s => <div key={s.t}><h3>{s.t}</h3><p>{s.d}</p></div>)}</div>
      </Section>

      <Section id="project" title="Project">
  <ul className="works">{projects.map(p => <li key={p.slug}>
    <a href={'#/project/' + p.slug}>
      <span className="app-icon" aria-hidden="true">
        {p.icon ? <img src={p.icon} alt="" loading="lazy" /> : <b>{p.title[0]}</b>}
      </span>
      <div className="w-info">
        <div className="w-head"><h3 className="big">{p.title}</h3><span className="muted">{p.period}</span></div>
        <p>{p.oneLiner}</p>
        <p className="w-role">{p.role}</p>
        <div className="w-stack">{p.stack.join(' / ')}</div>
      </div>
    </a>
  </li>)}</ul>
</Section>

      <Section id="experience" title="Experience">
  <div className="exp-list">
    {experience.map((item, i) => (
      <Reveal key={`${item.company}-${item.period}`} delay={i * 120}>
        <article className="exp-item">
          <div className="exp-body">
            <div className="exp-meta">
              <p className="exp-type">{item.type}</p>
              <p className="muted">{item.period}</p>
            </div>
            <h3 className="big">{item.company}</h3>
            <p className="exp-sum">{item.summary}</p>
          </div>
        </article>
      </Reveal>
    ))}
  </div>
</Section>

      <Section id="skills" title="Skills">
        <dl className="skills">{skills.map(s => <div key={s.g}><dt>{s.g}</dt><dd>{s.v.join(', ')}</dd></div>)}</dl>
      </Section>

<div className="info-grid">
  <Section id="awards-sec" title="Awards">
    <ul className="info-list">
      {awards.map((a) => (
        <li key={a.t} className="info-item">
          <strong>{a.t}</strong>
          <span>{a.d}</span>
        </li>
      ))}
    </ul>
  </Section>

  <Section id="cert-sec" title="Certificate">
    <ul className="info-list">
      {certs.map((a) => (
        <li key={a.t} className="info-item">
          <strong>{a.t}</strong>
          <span>{a.d}</span>
        </li>
      ))}
    </ul>
  </Section>

  <Section id="edu-sec" title="Education">
    <div className="edu-item">
      <strong>{education.school}</strong>
      <span>{education.period}</span>
    </div>
  </Section>
</div>


      <section id="contact" className="contact">
        <Flowers className="contact-flowers" count={38} seed={9} />
        <Reveal><div className="contact-in">
          <h3>새로운 서비스를 함께 만들어가고 싶습니다</h3>
          <a className="mail" href={'mailto:' + profile.email}>{profile.email}</a>
        </div></Reveal>
      </section>
    </main>
  </>
}
