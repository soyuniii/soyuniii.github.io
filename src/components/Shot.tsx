// 스크린샷 자리. src를 채우면 이미지로, 비어 있으면 안내 프레임이 보입니다.
export default function Shot({ src, label, ratio = '9/19' }: { src?: string; label: string; ratio?: string }) {
  return <figure className="shot" style={{ aspectRatio: ratio }}>
    {src ? <img src={src} alt={label} loading="lazy" /> : <span>{label}<br />화면 추가 예정</span>}
  </figure>
}
