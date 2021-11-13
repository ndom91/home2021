const Blur = () => {
  return (
    <div className="absolute w-2/3 h-96 top-24 right-4 md:right-24">
      <div className="absolute top-0 bg-purple-300 rounded-full right-4 w-72 h-72 opacity-60 dark:opacity-90 animate-blob blur-2xl filter mix-blend-multiply dark:mix-blend-overlay"></div>
      <div className="absolute top-0 bg-yellow-300 rounded-full opacity-50 animation-delay-2000 right-64 w-72 h-72 dark:opacity-80 animate-blob blur-2xl filter mix-blend-multiply dark:mix-blend-overlay"></div>
      <div className="absolute bg-pink-300 rounded-full opacity-50 animation-delay-4000 -bottom-4 right-32 w-72 h-72 dark:opacity-90 animate-blob blur-2xl filter mix-blend-multiply dark:mix-blend-overlay"></div>
    </div>
  )
}

export default Blur
