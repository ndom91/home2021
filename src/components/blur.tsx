const Blur = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-8 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-60 2xl:right-96 dark:opacity-60 max-h-[800px] max-w-[900px] animate-blob mix-blend-multiply blur-3xl lg:h-[60vh] lg:w-[40vw] dark:mix-blend-overlay"></div>
      <div className="absolute right-0 top-14 w-96 h-96 bg-yellow-200 rounded-full opacity-50 2xl:-top-56 2xl:-right-64 dark:opacity-50 animation-delay-2000 max-h-[800px] max-w-[900px] animate-blob mix-blend-multiply blur-3xl lg:h-[60vh] lg:w-[40vw] dark:mix-blend-overlay"></div>
      <div className="absolute right-0 top-32 w-96 h-96 bg-pink-200 rounded-full opacity-50 lg:-top-24 2xl:-right-24 2xl:-top-36 dark:opacity-60 animation-delay-4000 max-h-[800px] max-w-[900px] animate-blob mix-blend-multiply blur-3xl lg:h-[60vh] lg:w-[40vw] dark:mix-blend-overlay"></div>
    </div>
  )
}

export default Blur
