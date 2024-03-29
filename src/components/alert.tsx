type Alert = {
  header: string
  body: string
  setValue: ({ dismissed }: { dismissed: boolean }) => void
}

const Alert = ({ header, body, setValue }: Alert) => {
  return (
    <div className="flex justify-center mb-4 w-full text-gray-800 dark:text-gray-100 bg-gray-400/25 backdrop-blur-lg backdrop-filter dark:bg-gray-700/25">
      <div className="flex justify-between items-center p-4 w-full text-sm text-left md:max-w-5xl">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 w-12 h-12 text-gray-700 dark:text-palevioletred"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <div>
            <h2 className="text-xl font-bold">{header}</h2>
            <div className="text-lg font-light" dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </div>
        <button
          onClick={() => setValue({ dismissed: true })}
          className="rounded-full transition-shadow duration-300 hover:ring-4 hover:ring-pink-300 focus:ring focus:ring-pink-300 focus:outline-none dark:hover:ring-palevioletred dark:focus:ring-palevioletred"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-gray-400 dark:text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Alert
