const Blur = () => {
  return (
    <div className="pointer-events-none absolute top-[15vh] right-4 h-96 w-full md:right-24 ">
      <div className="absolute right-80 top-0 h-96 max-h-[800px] w-96 max-w-[900px] animate-blob rounded-full bg-purple-200 opacity-60 mix-blend-multiply blur-3xl filter dark:opacity-60 dark:mix-blend-overlay lg:h-[60vh] lg:w-[40vw] 2xl:right-96"></div>
      <div className="animation-delay-2000 absolute top-0 -top-80 right-0 h-96 max-h-[800px] w-96 max-w-[900px] animate-blob rounded-full bg-yellow-200 opacity-50 mix-blend-multiply blur-3xl filter dark:opacity-50 dark:mix-blend-overlay lg:h-[60vh] lg:w-[40vw] 2xl:-top-96 2xl:-right-64"></div>
      <div className="animation-delay-4000 absolute bottom-0 right-0 h-96 max-h-[800px] w-96 max-w-[900px] animate-blob rounded-full bg-pink-200 opacity-50 mix-blend-multiply blur-3xl filter dark:opacity-60 dark:mix-blend-overlay lg:-bottom-80 lg:h-[60vh] lg:w-[40vw] 2xl:-bottom-96 2xl:-right-64"></div>
    </div>
  )
}

export default Blur
