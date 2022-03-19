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
            <div className="font-mono text-xs font-normal text-gray-700 dark:text-gray-100">
              {title}
            </div>
          </div>
        </div>
        <button
          className="tra transition-hover mr-2 inline-flex rounded-md rounded-t-md p-1.5 outline-none ring-pink-300 duration-300 hover:cursor-pointer hover:bg-pink-300 hover:bg-opacity-30  hover:opacity-100 hover:outline-none hover:ring-pink-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:ring-palevioletred dark:hover:ring-palevioletred dark:focus:ring-palevioletred"
          onClick={copyCode}
        >
          {success ? (
            <svg
              className="h-4 w-4 opacity-100 transition-all duration-1000"
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
              className="h-4 w-4 opacity-100 transition-all duration-1000"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
          <span className="ml-1 text-xs tracking-tight">Copy Source</span>
        </button>
      </div>
      <div className="z-10">{children}</div>
    </div>
  )
}

export default CodeEditor
