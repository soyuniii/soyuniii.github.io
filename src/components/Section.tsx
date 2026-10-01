import { ReactNode } from 'react'
import Reveal from './Reveal'
// 좌측 제목은 sticky, 우측 내용이 스크롤되는 2단 구조. tone으로 배경 톤을 바꿉니다.
export default function Section({ id, title, children, tone = '' }: { id: string; title: string; children: ReactNode; tone?: string }) {
  return <section id={id} className={'sec ' + tone}>
    <h2 className="sec-title">{title}</h2>
    <Reveal><div className="sec-body">{children}</div></Reveal>
  </section>
}
