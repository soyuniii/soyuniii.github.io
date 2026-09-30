import { ReactNode, useEffect, useRef, useState } from 'react'
export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); o.disconnect() } }, { threshold: 0.12 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return <div ref={ref} className={'reveal' + (on ? ' on' : '')} style={{ transitionDelay: delay + 'ms' }}>{children}</div>
}
