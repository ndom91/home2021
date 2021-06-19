type Alert = {
  header: string
  body: string
}

const Alert = ({ header, body }: Alert) => {
  return (
    <div className="bg-gray-400/25 dark:bg-gray-700/25 flex justify-center w-full backdrop-blur-lg backdrop-filter">
      <div className="sm:max-w-screen px-4 py-6 w-full text-left dark:text-gray-100 text-gray-800 text-sm md:max-w-5xl">
        <h2 className="font-bold">{header}</h2>
        <div
          className="font-extralight"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  )
}

export default Alert
