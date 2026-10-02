import { useCallback, useEffect, useRef, useState } from 'react'
import Shot from './Shot'

type Feature = { name: string; desc: string; image?: string }

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches

// App Store 스타일 스크린샷 캐러셀: scroll-snap + 화살표 버튼 + 터치 스와이프 + 키보드(←/→)
export default function FeatureCarousel({ items }: { items: Feature[] }) {
  const track = useRef<HTMLDivElement>(null)
  const [edge, setEdge] = useState({ start: true, end: false })
  const [midY, setMidY] = useState(160) // 화살표를 이미지 높이의 중앙에 맞추기 위한 값

  const update = useCallback(() => {
    const t = track.current
    if (!t) return
    setEdge({ start: t.scrollLeft < 4, end: t.scrollLeft + t.clientWidth >= t.scrollWidth - 4 })
    const shot = t.querySelector<HTMLElement>('.shot')
    if (shot) setMidY(shot.offsetHeight / 2)
  }, [])

  useEffect(() => {
    const t = track.current
    if (!t) return
    update()
    const ro = new ResizeObserver(update)
    ro.observe(t)
    return () => ro.disconnect()
  }, [update, items])

  const PAGE = 3 // 화살표 한 번에 넘길 칸 수

  const move = (dir: 1 | -1) => {
  const t = track.current
  if (!t) return
  const s = t.querySelectorAll<HTMLElement>('.slide')
  const step = s.length > 1 ? s[1].offsetLeft - s[0].offsetLeft : t.clientWidth
  t.scrollBy({ left: dir * step * PAGE, behavior: reduced() ? 'auto' : 'smooth' })
}

  return <div className="carousel" role="region" aria-roledescription="carousel" aria-label="주요 기능 화면">
    <div
      className="track" ref={track} tabIndex={0} onScroll={update}
      onKeyDown={e => { if (e.key === 'ArrowRight') move(1); if (e.key === 'ArrowLeft') move(-1) }}
    >
      {items.map(f => <figure className="slide" key={f.name}>
        <Shot src={f.image} label={f.name} ratio="9/19" />
        <figcaption><h3>{f.name}</h3><p>{f.desc}</p></figcaption>
      </figure>)}
    </div>
{(['prev', 'next'] as const).map(k => {
  const hidden = k === 'prev' ? edge.start : edge.end
  return <button key={k} className={`car-btn car-${k}` + (hidden ? ' off' : '')}
    onClick={() => move(k === 'next' ? 1 : -1)}
    aria-label={k === 'next' ? '다음 화면' : '이전 화면'} tabIndex={hidden ? -1 : 0}>
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d={k === 'next' ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'} />
    </svg>
  </button>
})}
  </div>
}