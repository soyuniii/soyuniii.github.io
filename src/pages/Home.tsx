import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { profile, strengths, projects, experience, beyond, skills, awards, education, certs } from '../data/content'

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Home() {
  return <>
    <header className="nav">
      <strong>{profile.name}</strong>
      <nav>{[['work', 'Work'], ['experience', 'Experience'], ['skills', 'Skills'], ['contact', 'Contact']].map(([id, l]) =>
        <button key={id} onClick={() => go(id)}>{l}</button>)}</nav>
    </header>

    <main>
      <section className="hero">
        <div className="frame">
          <i className="h tl" /><i className="h tr" /><i className="h bl" /><i className="h br" />
          <span className="tag">{profile.role}</span>
          <h1>{profile.headline.map((l, i) => <span key={i} style={{ animationDelay: 150 + i * 130 + 'ms' }}>{l}</span>)}</h1>
        </div>
        <p className="lead">{profile.intro}</p>
        <ul className="chips">{profile.keywords.map(k => <li key={k}>{k}</li>)}</ul>
        <div className="links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={'mailto:' + profile.email}>{profile.email}</a>
        </div>
      </section>

      <Section id="about" title="이런 개발자입니다">
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
        <Reveal>
          <h2>함께 만들어 보고 싶으시다면</h2>
          <a className="mail" href={'mailto:' + profile.email}>{profile.email}</a>
        </Reveal>
      </section>
    </main>
  </>
}
