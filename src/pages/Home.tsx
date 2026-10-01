import { useEffect, useState } from 'react'
import Flowers from '../components/Flowers'
import portrait from '../assets/portrait.jpg'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { profile, strengths, projects, experience, beyond, skills, awards, education, certs } from '../data/content'

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
      <strong>{profile.name}</strong>
      <nav>{[['work', 'Work'], ['experience', 'Experience'], ['skills', 'Skills'], ['contact', 'Contact']].map(([id, l]) =>
        <button key={id} onClick={() => go(id)}>{l}</button>)}</nav>
    </header>

    <main>
      <section className="hero">
        <div className="clouds" aria-hidden="true"><i className="cloud c1" /><i className="cloud c2" /><i className="cloud c3" /></div>
        <svg className="hill back" viewBox="0 0 1440 240" preserveAspectRatio="none" aria-hidden="true"><path fill="#8FAF72" d="M0 70C220 20 460 30 700 70S1180 120 1440 40V240H0Z" /></svg>
        <Flowers className="hero-flowers" count={46} seed={3} />
        <div className="hero-inner">
          <div className="hero-text">
            <p className="role">{profile.role}</p>
            <h1>{profile.headline.map((l, i) => <span key={i} style={{ animationDelay: 150 + i * 140 + 'ms' }}>{l}</span>)}</h1>
            <p className="lead">{profile.intro}</p>
            <ul className="chips">{profile.keywords.map(k => <li key={k}>{k}</li>)}</ul>
            <div className="links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={'mailto:' + profile.email}>{profile.email}</a>
            </div>
          </div>
          <div className="photo"><img src={portrait} alt="햇빛을 가리고 웃는 모습" /></div>
        </div>
        <svg className="hill front" viewBox="0 0 1440 240" preserveAspectRatio="none" aria-hidden="true"><path fill="#B7C98A" d="M0 130C260 80 520 150 800 120S1240 70 1440 110V240H0Z" /></svg>
      </section>

      <Section id="about" title="이런 개발자입니다" tone="grass">
        <div className="strengths">{strengths.map(s => <div key={s.t}><h3>{s.t}</h3><p>{s.d}</p></div>)}</div>
      </Section>

      <Section id="work" title="Work">
        <ul className="works">{projects.map(p => <li key={p.slug}>
          <a href={'#/project/' + p.slug}>
            <div className="w-head"><h3>{p.title}</h3><span className="muted">{p.period}</span></div>
            <p>{p.oneLiner}</p>
            <p className="w-role">{p.role}</p>
            <div className="w-stack">{p.stack.join(' / ')}</div>
          </a>
        </li>)}</ul>
      </Section>

      <Section id="experience" title="Experience">
        <h3 className="big">{experience.company}<span className="muted"> {experience.title}</span></h3>
        <p className="muted">{experience.period}</p>
        <p>{experience.summary}</p>
        <ul className="list">{experience.points.map(x => <li key={x}>{x}</li>)}</ul>
      </Section>

      <Section id="beyond" title="개발 밖의 역량">
        <div className="strengths">{beyond.map(s => <div key={s.t}><h3>{s.t}</h3><p>{s.d}</p></div>)}</div>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="skills">{skills.map(s => <div key={s.g}><dt>{s.g}</dt><dd>{s.v.join(', ')}</dd></div>)}</dl>
      </Section>

      <Section id="more" title="Awards & Education">
        <ul className="list">{awards.map(a => <li key={a.t}>{a.t} <span className="muted">{a.d}</span></li>)}</ul>
        <p><strong>{education.school}</strong> <span className="muted">{education.period}</span></p>
        <p className="muted">{certs.join(' / ')}</p>
      </Section>

      <section id="contact" className="contact">
        <Flowers className="contact-flowers" count={38} seed={9} />
        <Reveal><div className="contact-in">
          <h2>함께 만들어 보고 싶으시다면</h2>
          <a className="mail" href={'mailto:' + profile.email}>{profile.email}</a>
        </div></Reveal>
      </section>
    </main>
  </>
}
