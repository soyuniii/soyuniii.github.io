// ✏️ 내용 수정은 이 파일에서만 하면 됩니다.
export const profile = {
  name: '이름을 입력하세요', // TODO
  role: 'Frontend Developer',
  headline: ['화면을 설계하고,', '끝까지 구현하는', '프론트엔드 개발자'],
  intro: 'React Native와 React로 웹·모바일 앱을 만듭니다. Figma로 UX/UI를 직접 설계하고, 배포까지 경험했습니다.',
  keywords: ['React Native', 'TypeScript', 'Figma UX/UI', 'Play Store 배포'],
  github: 'https://github.com/soyuniii',
  email: 'your@email.com', // TODO
}

export const strengths = [
  { t: '설계부터 구현까지', d: '프로젝트 3건에서 Figma UX/UI 설계와 프론트엔드 구현을 모두 직접 맡았습니다.' },
  { t: '혼자서도 끝까지', d: '팀 프론트 인원이 이탈한 프로젝트를 단독으로 완성했습니다.' },
  { t: '실서비스 경험', d: '앱 인턴으로 기능 개발, QA 대응, 스토어 심사·배포를 경험했습니다.' },
]

export type Project = {
  slug: string; title: string; oneLiner: string; period: string; stack: string[]; role: string
  team: string; image?: string; github?: string
  overview?: string; problem?: string; role_list?: string[]; uxui?: string[]; frontend?: string[]
  features?: { name: string; desc: string; image?: string }[]
  challenges?: { title: string; body: string }[]; result?: string[]; learned?: string
}

export const projects: Project[] = [
  {
    slug: 'nomad', title: 'nom:ad', period: '2024.12 – 2025.02',
    oneLiner: '고향 음식이 그리운 외국인 여행자·이민자·근로자를 위한 자국 음식점 추천 및 실시간 소통 앱',
    stack: ['React Native', 'react-native-maps', 'WebSocket', 'Axios'],
    role: '기획 총괄 · UX/UI 디자인 · 프론트엔드 단독 개발', team: 'Front-end 1 / Back-end 2',
    github: 'https://github.com/soyuniii/nomad',
    overview: '타지에서 고향 음식을 찾는 사람들이 음식점을 발견하고, 같은 처지의 사람과 바로 대화할 수 있게 하는 서비스입니다.',
    problem: '외국인 여행자·이민자·근로자는 자국 음식점을 찾기 어렵고, 정보를 나눌 통로도 부족합니다.',
    role_list: ['서비스 기획 총괄', 'Figma 앱 프로토타입 UX/UI 디자인', 'React Native 앱 전체 화면 개발 (프론트 단독)'],
    uxui: ['Figma로 앱 프로토타입을 직접 설계', '회원가입·로그인, 메인, 음식점 상세, 리뷰, 프로필 화면 구성'],
    frontend: ['React Native로 전체 화면 구현', '세션 기반 인증, 쿠키 저장, Axios 연동', '애니메이션 리소스·useEffect 최적화, 에러 예외 처리'],
    features: [
      { name: '해시태그 기반 음식점 검색', desc: '해시태그로 원하는 음식점을 찾습니다.' },
      { name: '위치 기반 자국 음식점 추천', desc: '사용자 위치를 기준으로 음식점을 추천합니다.' },
      { name: '지도 마커 시각화', desc: 'react-native-maps와 geolocation API로 내 위치와 음식점 마커를 표시합니다.' },
      { name: '1:1 실시간 채팅', desc: 'WebSocket 기반 채팅을 개발했습니다.' },
    ],
    challenges: [
      { title: '프론트 인원 이탈, 단독 개발로 전환', body: '2명이던 프론트엔드가 1명이 되었지만 기획 단계부터 모든 UI와 기능을 직접 구현해 완성했습니다. (TODO: 일정·우선순위 조정 방식 추가)' },
      { title: '지도·위치·쿠키·채팅 등 네이티브 모듈 연동', body: '여러 네이티브 모듈을 한 앱에 연동하며 크로스 플랫폼 개발 감각을 쌓았습니다. (TODO: 막혔던 지점과 해결법 추가)' },
      { title: '성능과 안정성', body: '애니메이션 리소스와 useEffect를 최적화하고 에러 예외 처리를 정리했습니다. (TODO: 개선 전후 수치 추가)' },
    ],
    result: ['기획부터 배포까지 전 과정을 단독 수행', '코드 구조화, 상태 관리, 성능 최적화의 중요성 체득', 'API 명세 기반 협업 역량 향상'],
    learned: '전체 서비스를 혼자 책임지며 서비스 전반을 깊이 이해하게 됐습니다.',
  },
  {
    slug: 'ai-pickle', title: 'AI픽클', period: '2025.03 – 진행 중',
    oneLiner: '대학교 강의평을 AI로 요약해 주는 모바일 앱',
    stack: ['React Native', 'TypeScript', 'OpenAI API', 'REST API'],
    role: 'UX/UI 디자인 총괄 · 프론트엔드 개발', team: 'Front-end 1 / Back-end 2',
    overview: '길고 흩어진 강의평을 요약해 한눈에 보여주는 앱입니다.',
    role_list: ['Figma 화면 설계와 프로토타입 총괄', 'TypeScript 기반 React Native 화면 구현', '강의평 요약 프롬프트 설계와 응답 처리'],
    uxui: ['백엔드·AI 담당자와 요약 기준, UI/UX 피드백을 반복 반영'],
    frontend: ['iOS/Android 대응 UI', '컴포넌트 재사용을 고려한 구조', 'REST API 연동, JSON 파싱, 에러 핸들링'],
    features: [{ name: '강의평 조회·요약', desc: '요약 결과를 화면에 보여줍니다.' }],
    result: ['진행 중: 요약 신뢰도 향상과 사용자 피드백 개선', '예정: 맞춤 강의 추천, 저장 기능'],
  },
  {
    slug: 'donguldongul', title: '돈글돈글', period: '2026.03 – 진행 중',
    oneLiner: '금융 뉴스와 용어를 카드뉴스로 배우고, 청년 정책과 소비 현황을 확인하는 청년 금융 AI 플랫폼',
    stack: ['React Native'], role: '프론트엔드 개발', team: 'Front-end 1 / Back-end 1 / AI 1',
    overview: '경제·금융에 익숙하지 않은 청년을 위한 서비스입니다. (TODO: 담당 내용·기술 스택 보강)',
  },
]

export const experience = {
  company: 'TRIT', title: '크로스 플랫폼 앱 개발 인턴', period: '2025.06 – 2026.02',
  summary: 'AI 여행 콘텐츠 플랫폼 모바일 앱(React Native) 개발·유지보수',
  points: [
    '기획·디자인·백엔드 팀과 요구사항 정의부터 개발, QA, 배포까지 협업',
    '기존 코드 구조를 파악해 UI 컴포넌트를 수정하고 신규 화면 구현',
    'REST API 연동, 사용자 입력 폼과 상태 관리 로직 개발',
    'QA 피드백과 버그 리포트를 기반으로 오류 수정 및 UX 개선',
    'Git 브랜치 전략, PR 작성, 코드 리뷰 참여',
    'Android/iOS UI 차이 대응, Supabase 연동, Play Store 심사·배포, Deep Link, OTA update 적용',
  ],
}

export const beyond = [
  { t: '디자인', d: 'Figma로 UX/UI를 설계한 프로젝트 3건. 현재 App Store 배포를 목표로 하는 프로젝트에 디자이너로도 참여 중입니다.' },
  { t: '기획·리더십', d: '학생회 기획부를 시작으로 여러 프로젝트와 공모전에서 기획자이자 리더로 팀을 이끌었습니다.' },
  { t: '마케팅', d: '창업동아리 BUSDAY에서 사업계획서와 마케팅 방향을, Techsol에서 13개 대학 게시판 배포와 GA 분석, 대만 설문을 진행했습니다.' },
]

export const skills = [
  { g: 'Frontend', v: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML/CSS'] },
  { g: 'Design', v: ['Figma'] },
  { g: 'Tools', v: ['Git', 'GitHub', 'REST API', 'Notion', 'Slack'] },
  { g: 'AI tools', v: ['Cursor', 'Claude', 'Codex'] },
  { g: 'Other', v: ['Python'] },
]

export const awards = [
  { t: '2024 동남권 LINC 3.0 글로벌 창업 아이디어 경진대회 우수상', d: '2024.08' },
  { t: '2025 하계종합학술대회 및 대학생논문경진대회 은상 (당뇨병 조기 진단 모델)', d: '2025.06' },
  { t: 'PNU dream beats 창업 경진대회 장려상 (BUSDAY)', d: '2024' },
]
export const education = { school: '부산대학교 IT응용공학과', period: '2023.03 – 2027.02 (예정)' }
export const certs = ['SQLD (2026.06)', '정보처리기사 (2026.09)', 'TOEIC Speaking IH (2026.08)']
