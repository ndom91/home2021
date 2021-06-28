import { useState, FunctionComponent } from "react"
import { useCopyToClipboard } from "react-use"
import textContent from "react-addons-text-content"

type EditorProps = {
  title: string
}

const CodeEditor: FunctionComponent<EditorProps> = ({ title, children }) => {
  const [success, setSuccess] = useState(false)
  const [state, copyToClipboard] = useCopyToClipboard()

  const copyCode = () => {
    copyToClipboard(textContent(children))
    if (!state.error) {
      setSuccess(true)
    }
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between w-full h-10 -mb-3 bg-gray-100 rounded-t-md dark:bg-gray-800">
        <div>
          <div className="inline-flex items-center h-full ml-4 space-x-2">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-200 rounded-full"></span>
            <span className="w-3 h-3 bg-green-300 rounded-full"></span>
          </div>
          <div className="inline-flex items-end p-2 ml-6 rounded-t-md">
            <div className="inline-flex h-full font-mono text-xs font-light text-gray-700 dark:text-gray-200">
              {title}
            </div>
          </div>
        </div>
        <button
          className="inline-flex p-1 mr-2 transition-shadow duration-300 rounded-md tra rounded-t-md hover:opacity-100 hover:cursor-pointer focus:outline-none hover:outline-none focus:ring-2 dark:ring-palevioletred dark:hover:ring-palevioletred hover:ring-2 focus:opacity-100 hover:ring-pink-300 ring-pink-300 focus:ring-pink-300 dark:focus:ring-palevioletred"
          onClick={copyCode}
        >
          {success ? (
            // <svg
            //   xmlns="http://www.w3.org/2000/svg"
            //   className="w-5 h-5 text-pink-300 transition-all duration-1000 opacity-100 dark:text-palevioletred"
            //   fill="none"
            //   viewBox="0 0 24 24"
            //   stroke="currentColor"
            // >
            //   <path
            //     strokeLinecap="round"
            //     strokeLinejoin="round"
            //     strokeWidth={2}
            //     d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            //   />
            // </svg>
            <svg
              className="w-5 h-5 transition-all duration-1000 opacity-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transition-all duration-1000 opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="z-10">{children}</div>
    </div>
  )
}

export default CodeEditor
