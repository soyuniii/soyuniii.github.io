import { useEffect, useMemo, useRef } from 'react'

const rnd = (s: number) => { const x = Math.sin(s * 999.7) * 10000; return x - Math.floor(x) }

// 노란 유채꽃 들판. 마우스가 가까이 오면 꽃이 살짝 반대쪽으로 기울고, 멀어지면 천천히 돌아옵니다.
export default function Flowers({ count = 44, seed = 1, className = '' }: { count?: number; seed?: number; className?: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const items = useMemo(() => Array.from({ length: count }, (_, i) => ({
    x: ((i + rnd(i + seed)) / count) * 100, h: 40 + rnd(i * 3 + seed) * 46,
    y: rnd(i * 11 + seed) * 34, d: rnd(i * 7 + seed) * 5,
  })), [count, seed])

  useEffect(() => {
    const el = wrap.current
    // 터치 기기·모션 감소 설정에서는 마우스 인터랙션을 끕니다 (CSS의 잔잔한 흔들림만 유지)
    if (!el || matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches) return
    const nodes = Array.from(el.children) as HTMLElement[]
    const ang = nodes.map(() => 0)
    let mx = -9999, my = -9999, raf = 0
    const tick = () => {
      raf = 0
      const w = el.getBoundingClientRect()
      let busy = false
      nodes.forEach((n, i) => {
        const dx = w.left + n.offsetLeft + n.offsetWidth / 2 - mx
        const dy = w.top + n.offsetTop + n.offsetHeight * 0.3 - my
        const d = Math.hypot(dx, dy)
        const target = d < 170 ? Math.sign(dx || 1) * (1 - d / 170) * 15 : 0
        ang[i] += (target - ang[i]) * 0.07
        if (Math.abs(target - ang[i]) > 0.04) busy = true
        n.style.transform = `rotate(${ang[i].toFixed(2)}deg)`
      })
      if (busy) raf = requestAnimationFrame(tick)
    }
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick) }
    const move = (e: PointerEvent) => { mx = e.clientX; my = e.clientY; kick() }
    const leave = () => { mx = my = -9999; kick() }
    addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    return () => { removeEventListener('pointermove', move); document.removeEventListener('pointerleave', leave); cancelAnimationFrame(raf) }
  }, [])

  return <div ref={wrap} className={'flowers ' + className} aria-hidden="true">
    {items.map((f, i) => <div key={i} className="fl" style={{ left: f.x + '%', bottom: f.y }}>
      <div className="fl-sway" style={{ animationDelay: -f.d + 's' }}>
        <svg viewBox="0 0 24 60" style={{ height: f.h, width: f.h * 0.4 }}>
          <path d="M12 60C12 46 11 34 12 20" stroke="#7d9f62" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <path d="M12 44C16 40 19 41 20 38C16 37 13 39 12 44Z" fill="#8FAF72" />
          <g transform="translate(12 16)" fill="#F3C94E">
            <circle cx="0" cy="-5" r="4.3" /><circle cx="5" cy="0" r="4.3" /><circle cx="0" cy="5" r="4.3" /><circle cx="-5" cy="0" r="4.3" />
            <circle r="2.6" fill="#E3AE2F" />
          </g>
        </svg>
      </div>
    </div>)}
  </div>
}
