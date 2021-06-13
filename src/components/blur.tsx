const Blur = () => {
  return (
    <div className="absolute right-48 top-0 w-1/2 h-96">
      <div className="absolute left-8 top-0 w-72 h-72 bg-purple-300 rounded-full opacity-60 animate-blob blur-2xl filter mix-blend-multiply"></div>
      <div className="animation-delay-2000 absolute -right-12 top-0 w-72 h-72 bg-yellow-300 rounded-full opacity-70 animate-blob blur-2xl filter mix-blend-multiply"></div>
      <div className="animation-delay-4000 absolute -bottom-4 left-16 w-72 h-72 bg-pink-300 rounded-full opacity-50 animate-blob blur-2xl filter mix-blend-multiply"></div>
    </div>
  )
}

export default Blur
