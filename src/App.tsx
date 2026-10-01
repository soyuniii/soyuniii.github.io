import { useEffect, useState } from 'react'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

// GitHub Pages는 SPA 새로고침 시 404가 나므로 hash 라우팅(#/project/슬러그) 사용
export default function App() {
  const [hash, setHash] = useState(location.hash)
  useEffect(() => {
    const f = () => { setHash(location.hash); window.scrollTo(0, 0) }
    addEventListener('hashchange', f)
    return () => removeEventListener('hashchange', f)
  }, [])
  const m = hash.match(/^#\/project\/(.+)$/)
  return <div className={'page'+(m?' detail-page':'')} key={hash.startsWith('#/project') ? hash : 'home'}>
    {m ? <ProjectDetail slug={m[1]} /> : <Home />}
  </div>
}
