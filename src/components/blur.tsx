const Blur = () => {
  return (
    <div className="absolute w-full h-96 top-[15vh] right-4 md:right-24 pointer-events-none">
      <div className="absolute bg-purple-200 rounded-full 2xl:right-96 lg:w-[40vw] lg:h-[60vh] max-w-[900px] max-h-[800px] opacity-60 dark:opacity-70 animate-blob blur-3xl filter mix-blend-multiply dark:mix-blend-overlay right-80 top-0 w-96 h-96"></div>
      <div className="absolute top-0 bg-yellow-200 rounded-full opacity-50 animation-delay-2000 2xl:-top-96 2xl:-right-64 lg:w-[40vw] lg:h-[60vh] max-w-[900px] max-h-[800px] dark:opacity-60 animate-blob blur-3xl filter mix-blend-multiply dark:mix-blend-overlay -top-80 right-0 w-96 h-96"></div>
      <div className="absolute bg-pink-200 rounded-full opacity-50 animation-delay-4000 2xl:-bottom-96 2xl:-right-64 lg:w-[40vw] lg:h-[60vh] max-w-[900px] max-h-[800px] dark:opacity-70 animate-blob blur-3xl filter mix-blend-multiply dark:mix-blend-overlay bottom-0 lg:-bottom-80 right-0 w-96 h-96"></div>
    </div>
  )
}

export default Blur
