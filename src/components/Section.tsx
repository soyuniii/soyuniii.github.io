import { ReactNode } from 'react'
import Reveal from './Reveal'
// 좌측 제목은 sticky, 우측 내용이 스크롤되는 2단 구조
export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="sec">
    <h2 className="sec-title">{title}</h2>
    <Reveal><div className="sec-body">{children}</div></Reveal>
  </section>
}
