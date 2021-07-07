import Script from "next/script"

const WebVitals = () => {
  return (
    <>
      <Script src="/assets/web-vitals-element.styled.min.js" />
      {/* @ts-ignore */}
      <web-vitals />
    </>
  )
}

export default WebVitals
