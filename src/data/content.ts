export const profile = {
  logo: 'Soyun An',
  role: 'Frontend Developer',
  name: '안소윤',
  name2: 'Soyun An (Pearl)',
  headline: ['디자인을 이해하고,', '사용자 경험을 코드로 구현합니다.'],
  intro: '기획과 UX/UI부터 프론트엔드 개발까지 직접 경험하며, 사용자 경험과 좋은 코드를 함께 고민합니다. AI를 활용해 빠르게 시작하되, 서비스의 완성도는 코드를 직접 이해하고 다듬는 과정에서 만들어진다고 생각합니다.',
  keywords: ['React', 'React Native', 'TypeScript','App Deployment'],
  github: 'https://github.com/soyuniii',
  email: 'pe1229@naver.com',
  tel: '010-2365-4412'
}

export const strengths = [
  { t: '설계부터 구현까지', d: '프로젝트 3건에서 Figma UX/UI 설계와 프론트엔드 구현을 모두 직접 맡았습니다. 당뇨 환자들을 위한 앱 <단디> 프로젝트의 디자이너로도 활동한 경험이 있습니다. ' },
  { t: '주도적으로 개선합니다', d: '학생회 기획부를 시작으로 프로젝트에서 기획자로 참여하며 아이디어를 구체적인 결과물로 발전시켜 왔습니다. 인턴 과정에서는 기존 QA 방식의 개선을 제안하고 템플릿을 직접 제작해 다른 팀에서도 활용할 수 있도록 공유한 경험이 있습니다.' },
  { t: '함께 만드는 과정을 고민합니다', d: '기획·디자인·개발 등 다양한 역할의 구성원과 협업하며 명확한 소통과 일정 관리의 중요성을 배웠습니다.' },
  { t: '실 서비스의 전 과정을 경험했습니다', d: '앱 개발 인턴으로 기능 구현부터 QA, 스토어 심사·배포, CS 대응까지 참여하며 실제 서비스가 사용자에게 전달되고 개선되는 과정을 경험했습니다.' },

]

export type Project = {
  slug: string; title: string; oneLiner: string; period: string; stack: string[]; role: string
  team: string; github?: string; app_link?: string; play_link?: string;
  overview?: string; problem?: string; role_list?: string[]; uxui?: string[]; development?: string[]
  features?: { name: string; desc: string; image?: string }[]
  challenges?: { title: string; body: string }[]; result?: string; learned?: string; havetodo?: string;
}

export const projects: Project[] = [
  {
    slug: 'donguldongul', title: '돈글돈글', period: '2026.03 – 진행 중',
    oneLiner: '금융 뉴스를 카드뉴스로 쉽게 배우고 학습하는 청년 금융 AI 플랫폼',
    stack: ['React Native', 'TypeScript'], role: '기획 총괄 · UX/UI 디자인 · 프론트엔드 개발', team: 'FE 1 / BE 1 / AI 1',
    features: [
      { name: 'OAuth 로그인', desc: '카카오 / 네이버(개발 예정) 소셜 로그인', image:'/images/dongle/1.png' },
      { name: '홈', desc: '무한 스크롤로 최신 카드뉴스 탐색', image:'/images/dongle/2.png' },
      { name: '탐색', desc: '카테고리 별 지금 주목할 소식 탐색', image:'/images/dongle/3.png' },
      { name: '검색', desc: '궁금한 뉴스를 검색하고 실시간 트랜드를 확인', image:'/images/dongle/4.png' },
      { name: '마이페이지', desc: '학습 스트릭과 활동 기록 확인', image:'/images/dongle/5.png' },
      { name: '뉴스 상세 (본문 학습)', desc: '어려운 용어 자동 하이라이팅, 설명 제공', image:'/images/dongle/6.png' },
      { name: 'AI 생성 퀴즈', desc: '본문 학습 이후 AI 생성 퀴즈로 복습', image:'/images/dongle/7.png' },
      { name: '설정', desc: '서비스 기본 설정 및 알림 설정 (개발 예정)', image:'/images/dongle/8.png' },
    ],
    overview: '경제·금융에 익숙하지 않은 청년이 복잡한 금융 정보를 쉽게 이해하고 자신의 생활에 연결할 수 있도록 만든 금융 AI 플랫폼입니다. ',
    problem: '긴 기사와 어려운 금융 용어는 청년이 금융 정보를 접하는데 가장 큰 장벽이라고 생각했습니다. 금융 뉴스를 짧은 카드뉴스로 제공하고, 어려운 용어를 쉽게 설명하며, 맞춤형 청년 정책과 소비 현황까지 한 곳에서 확인할 수 있도록 구성했습니다.',
     development: [
      'React Native Reanimated를 활용하여 스크롤에 따른 헤더 숨김 및 카드뉴스 전환 애니메이션을 구현하였습니다.',
  '학습 데이터를 가공하여 히트맵, 통계 카드 등 시각적인 학습 기록 UI를 구현하였습니다.',
   'Glassmorphism UI를 적용하여 반투명 블러와 그라데이션을 활용한 모바일 인터페이스를 구현하였습니다.',
 
],
    challenges: [
      { title: '페이지 전환 시 네비게이션 노출 문제', body: '카드뉴스에서 본문 학습으로 자연스럽게 이어지는 애니메이션을 구현하기 위해 별도의 화면 전환 없이 하나의 흐름으로 구성했습니다. 이 과정에서 홈에서 상세 콘텐츠로 전환할 때 하단 네비게이션이 함께 노출되는 문제가 발생했으며, Stack Provider를 활용해 화면 계층을 분리하고 상세 화면의 네비게이션 노출을 제어했습니다.' },
      { title: '카드뉴스 -> 본문학습으로 이어지는 UX에 대한 고민', body: '카드뉴스가 단순히 화면을 교체하는 방식이 아닌 기존 카드의 위치와 크기를 기반으로 확대되는 인터랙션으로 해결할 수 있었습니다. 카드의 위치를 측정하고 Reanimated를 활용해 상세 콘텐츠까지 자연스럽게 이어지도록 애니메이션 흐름을 설계했습니다.' },
    ],
    havetodo: '카카오 OAuth 및 주요 API를 모바일 환경에 연동하여 기존 웹 서비스의 데이터를 앱으로 확장할 예정입니다. 이후 소비데이터를 기반으로 사용자의 소비 패턴을 분석하고, Python 기반 데이터 분석을 결합한 개인화 콘텐츠를 구현하여 데이터 기반 금융 학습 경험을 강화할 예정입니다.'
  },
  {
    slug: 'trit', title: 'TRIT', period: '2025.06 – 2026.02',
    oneLiner: 'AI 기반 여행 콘텐츠 플랫폼 모바일 앱',
    stack: ['React Native','Expo', 'TypeScript','Tanstack Query',' Justand', 'Supabase'],
    role: '크로스 플랫폼 앱 개발 및 운영', team: 'App (2)',
    app_link: 'https://apps.apple.com/kr/app/trit-korea-travel-platform/id6754618596',
    play_link: 'https://play.google.com/store/apps/details?id=com.todaysquare.trit&hl=ko',
    features: [
  { name: 'OAuth 로그인', desc: '일반 로그인과 Google·Apple 등 소셜 로그인을 지원합니다.', image:'/images/trit/1.jpg' },
  { name: '회원가입', desc: '일반 사용자 회원가입과 크리에이터 전환 신청을 지원합니다.', image:'/images/trit/2.jpg' },
  { name: '홈', desc: '내 주변의 여행지와 콘텐츠, 파트너 상품을 탐색하고 새로운 여행 경험을 발견할 수 있습니다.', image:'/images/trit/3.jpg' },
  { name: '지도', desc: 'Google Maps를 기반으로 장소를 검색하고 저장하며, 관련 콘텐츠 확인부터 코스 생성과 길찾기까지 제공합니다.', image:'/images/trit/4.jpg' },
  { name: '콘텐츠', desc: '크리에이터의 여행 콘텐츠를 탐색하고 좋아요·댓글·저장하며 관련 상품과 장소를 바로 확인할 수 있습니다.', image:'/images/trit/5.jpg' },
  { name: '상품 탐색', desc: '카테고리와 필터를 활용해 다양한 여행 상품과 액티비티를 탐색할 수 있습니다.', image:'/images/trit/6.jpg' },
  { name: '상품 상세', desc: '상품 정보와 리뷰를 확인하고 예약 및 결제까지 진행할 수 있습니다.', image:'/images/trit/7.jpg' },
  { name: '바로가기', desc: '지도, 저장, 예약 등 주요 기능에 빠르게 접근할 수 있습니다.', image:'/images/trit/8.jpg' },
  { name: '크리에이터 탐색', desc: '크리에이터의 콘텐츠와 활동을 탐색하고 관심 있는 크리에이터를 확인할 수 있습니다.', image:'/images/trit/9.jpg' },
  { name: '어필리에이트', desc: '크리에이터가 쿠폰, 정산, 콘텐츠 등 어필리에이트 활동을 관리할 수 있습니다.', image:'/images/trit/10.png' },
],
  overview: '크리에이터의 여행 콘텐츠를 기반으로 한국의 여행지와 상품을 탐색하고, 여행 계획부터 예약·결제까지 한 곳에서 제공하는 여행 플랫폼입니다.',
 development: [
  'Next.js로 개발된 일부 웹 기능을 모바일 앱 환경에 맞게 전환하였습니다.',
  'TanStack Query와 Zustand로 서버·클라이언트 상태 관리를 진행했습니다.',
  'Supabase를 활용하여 크리에이터 가입 및 콘텐츠 관리 기능을 개발하였습니다.',
  'Excel 기반 다국어 데이터를 관리하고 앱 내 다국어 설정을 적용하였습니다.',
  'Google Play Store 및 App Store 심사·배포를 진행했습니다.',
  '내부 QA 및 CS 대응을 통해 버그를 수정하고 사용자 경험을 개선하였습니다.',
],
   challenges: [
  {
    title: '플랫폼별 Native UI 불일치 대응',
    body: 'React Native에서 Native 기능을 도입할 때 iOS와 Android 간 UI 및 동작 차이가 발생했습니다. 플랫폼별 Custom 컴포넌트를 별도로 구현하고 라이브러리 버전을 관리했으며, 지도 기능과 같이 호환성 문제가 발생한 경우 패치를 적용하여 플랫폼별 동작을 맞췄습니다.',
  },
  {
    title: '하드 업데이트로 인한 사용자 경험 개선',
    body: '앱 업데이트 시 사용자가 직접 최신 버전을 설치해야 하는 과정에서 사용자 경험이 저하되는 문제가 있었습니다. 이를 개선하기 위해 OTA 업데이트를 도입하여 앱 실행 환경에서 백그라운드로 업데이트가 진행되도록 구현했습니다.',
  },
  {
    title: '이미지 로딩에 따른 화이트 렌더링 개선',
    body: '홈과 쇼핑 화면처럼 이미지가 많이 사용되는 화면에서 캐시되지 않은 이미지가 로딩되는 동안 화이트 렌더링이 발생했습니다. 이를 해결하기 위해 expo-image로 이미지 처리를 전환하고 불필요한 props를 제거했으며, BlurHash 기반 placeholder를 적용해 이미지 로딩 중에도 자연스러운 UI가 유지되도록 개선했습니다.',
  },
],
    result:'출시가 끝이 아닌, 새로운 시작이라는 것을 깨달았습니다.',
   learned: '처음에는 앱을 스토어에 출시하는 것이 개발의 마지막이라고 생각했습니다. 하지만 실제 서비스를 운영하며 출시 이후에도 업데이트마다 QA를 진행하고, CS를 통해 전달되는 사용자 문제를 우선순위에 따라 개발과 병행해 해결해야 한다는 것을 알게 되었습니다. 작은 문제도 반복해서 확인하고 수정하며 서비스를 안정적으로 만들어가는 과정을 거치면서, 개발은 기능을 만드는 것에서 끝나는 것이 아니라 사용자가 계속 사용할 수 있도록 관리하고 개선하는 것까지 포함한다는 것을 배웠습니다.'
  },
  {
    slug: 'nomad', title: 'nom:ad', period: '2024.12 – 2025.02',
    oneLiner: '타지에서 고향 음식을 찾는 사람들을 위한 음식점 추천 및 실시간 소통 앱',
    stack: ['React Native', 'react-native-maps', 'WebSocket', 'Axios'],
    role: '기획 총괄 · UX/UI 디자인 · 프론트엔드 개발', team: 'FE 1 / BE 2',
    github: 'https://github.com/soyuniii/nomad',
    features: [
      { name: '회원가입 및 로그인', desc: '세션 기반 인증을 진행합니다.', image:'/images/nomad/1.png' },
      { name: '사용자 위치 기반 음식점 추천', desc: 'react-native-maps와 geolocation API로 반경 5km 내 자국 음식점 마커를 표시합니다.', image:'/images/nomad/2.png' },
      { name: '1:1 실시간 채팅', desc: 'Websocket을 기반으로 다른 사용자와의 실시간 채팅을 제공합니다.', image:'/images/nomad/3.png' },
      { name: '해시태그 기반 음식점 검색', desc: '음식점의 리뷰 내 해시태그 분석을 통해 검색 결과를 제공합니다.', image:'/images/nomad/4.png' },
      { name: '리뷰 작성 및 평점 시스템', desc: '방문한 음식점에 대한 리뷰 작성 및 별점 평가 기능', image:'/images/nomad/5.png' },
      { name: '음식점 상세조회', desc: '다른 사용자의 리뷰를 보고 리뷰를 작성할 수 있습니다.', image:'/images/nomad/6.png' },
      { name: '내 리뷰', desc: '내가 쓴 리뷰 조회/수정/삭제가 가능합니다.', image:'/images/nomad/7.png' },
      { name: '내 프로필 조회', desc: '기본 프로필을 조회합니다.', image:'/images/nomad/8.png' },
    ],
    overview: '타지에서 고향 음식을 찾는 사람들이 음식점을 발견하고, 같은 관심사를 가진 사용자와 소통할 수 있도록 만든 서비스입니다.',
    problem: '외국인 여행자·이민자·근로자는 자국 음식점을 찾기 어렵고, 정보를 나눌 통로도 부족합니다.',
    development: ['React Native 기반 앱 전체 화면 구현', '세션 기반 인증 및 쿠키 저장, Axios API 연동', 'react-native-maps와 위치 정보 API 연동','WebSocket 기반 1:1 실시간 채팅 구현','API 오류 및 예외 상황 처리',],
    challenges: [
      { title: '위기를 성장의 기회로', body: '예상치 못한 프론트엔드 인원 이탈 이후 개발 전반을 맡아 모든 UI와 기능을 직접 구현하며 프로젝트를 완성했습니다.' },
     {
      title: '메뉴 데이터 부족을 검색 기능으로 전환',
      body: '음식점 메뉴 정보를 활용한 검색 기능을 구현하기 위해 관련 데이터를 탐색했지만 적절한 CSV 데이터를 확보하기 어려웠습니다. 이에 사용자가 리뷰 작성 시 실제로 먹은 메뉴를 해시태그로 입력하도록 설계하고, 리뷰의 해시태그를 음식점 검색에 활용하는 방식으로 기능을 변경했습니다.',
      },
      {
        title: 'useEffect 중복 실행으로 발생한 API 요청 문제 해결',
        body: '현재 위치를 가져온 뒤 백엔드로 전달하는 과정에서 동일한 요청이 두 번 발생했습니다. 원인을 추적한 결과 useEffect가 불필요하게 재실행되고 있음을 확인했고, 의존성 배열을 정확하게 설정하여 중복 API 요청을 해결했습니다.',
      },
    ],
    result: 
  '서비스 전체의 흐름을 이해하게 되었습니다.',
    learned: '하나의 기능을 구현하는 것보다 서비스 전체의 흐름을 이해하고, 기획부터 사용자 경험과 기술적 구현까지 연결해 고민하는 것이 중요하다는 것을 배웠습니다.',
  },
  
  
]

export const experience = [
  {
    type: '01 · 실무 경험',
    company: '(주)오늘의 이야기 인턴 근무',
    period: '2025.06 – 2026.02',
    summary: '기획·마케팅·디자인·백엔드 팀과 요구사항 정의부터 개발, QA, 배포까지 협업하며 기획 변경과 사용자 요구사항을 반영하여 기능을 지속적으로 개선하였습니다.',
  },
  {
    type: '02 · 개발 경험',
    company: '개발 동아리 · AI Career School',
    period: '2023 – 2025',
    summary: '웹 개발의 기본 개념부터 프로젝트 구현까지 단계적으로 학습하며 개발 역량을 키웠습니다.',
  },
  {
    type: '03 · 이외 경험',
    company: '창업 동아리 · IoT Lab',
    period: '2023 – 2024',
    summary: '창업동아리 BUSDAY, Techsol에서 활동하며 사업계획서 작성, 13개 대학 게시판 배포와 GA 분석, 대만 설문을 진행하며 사용자에게 가치를 전달하는 과정을 경험했습니다.  개발뿐 아니라 기획·디자인·마케팅의 관점에서 제품을 바라보는 시각을 확장할 수 있었습니다.',
  },
]

export const skills = [
  { g: 'Frontend', v: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML/CSS'] },
  { g: 'Backend', v: ['REST API', 'Supabase', 'SQLite'] },
  { g: 'Tools', v: ['Git', 'GitHub', 'Figma', 'Notion', 'Slack','Zep'] },
  { g: 'AI tools', v: ['Cursor', 'Claude', 'Codex', 'Chat GPT'] },
  { g: 'Other', v: ['Python'] },
]

export const awards = [
  { t: '2024 동남권 LINC 3.0 글로벌 창업 아이디어 경진대회 [우수상]', d: '2024.08' },
  { t: '2025 하계종합학술대회 및 대학생논문경진대회 [은상]', d: '2025.06' },
]
export const education = { school: '부산대학교 IT응용공학과', period: '2023.03 – 2027.02 (예정)' }
export const certs = [
  { t: '정보처리기사', d: '2026.09' },
  { t: 'SQLD', d: '2026.06' },
  { t: 'TOEIC Speaking IH', d: '2026.08' },
]

