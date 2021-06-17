const Blur = () => {
  return (
    <div className="absolute bottom-0 right-4 w-2/3 h-96 sm:top-0">
      <div className="absolute right-4 top-0 w-72 h-72 bg-purple-300 rounded-full opacity-60 dark:opacity-90 animate-blob blur-2xl filter mix-blend-multiply"></div>
      <div className="animation-delay-2000 absolute right-64 top-0 w-72 h-72 bg-yellow-300 rounded-full opacity-50 dark:opacity-80 animate-blob blur-2xl filter mix-blend-multiply"></div>
      <div className="animation-delay-4000 absolute -bottom-4 right-32 w-72 h-72 bg-pink-300 rounded-full opacity-50 dark:opacity-90 animate-blob blur-2xl filter mix-blend-multiply"></div>
    </div>
  )
}

export default Blur
