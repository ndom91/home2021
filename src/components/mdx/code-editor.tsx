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
    <div className="w-full" style={{ width: "100%" }}>
      <div className="relative -mb-3 flex h-10 w-full items-center justify-between rounded-t-md bg-gray-100 dark:bg-gray-700">
        <div className="inline-flex h-full justify-center">
          <div className="ml-4 inline-flex h-full items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-red-400"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-200"></span>
            <span className="h-3 w-3 rounded-full bg-green-300"></span>
          </div>
          <div className="ml-6 inline-flex items-center rounded-t-md p-2">
            <div className="font-mono text-xs font-light text-gray-700 dark:text-gray-100">
              {title}
            </div>
          </div>
        </div>
        <button
          className="tra mr-2 inline-flex rounded-md rounded-t-md p-1 ring-pink-300 transition-shadow duration-300 hover:cursor-pointer hover:opacity-100 hover:outline-none hover:ring-2 hover:ring-pink-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:ring-palevioletred dark:hover:ring-palevioletred dark:focus:ring-palevioletred"
          onClick={copyCode}
        >
          {success ? (
            <svg
              className="h-5 w-5 opacity-100 transition-all duration-1000"
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
              className="h-5 w-5 opacity-100 transition-all duration-1000"
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
