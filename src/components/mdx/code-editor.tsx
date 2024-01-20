import { useState, useRef } from "react"
import { useCopyToClipboard } from "react-use"

type EditorProps = {
  title: string
}

const CodeEditor: React.FC<EditorProps> = ({ title, children }) => {
  const [success, setSuccess] = useState(false)
  const [state, copyToClipboard] = useCopyToClipboard()
  const codeWrapperRef = useRef<HTMLDivElement>(null)

  const copyCode = () => {
    copyToClipboard(codeWrapperRef?.current?.innerText ?? "")
    if (!state.error) {
      setSuccess(true)
    }
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }

  return (
    <div className="w-full" style={{ width: "100%" }}>
      <div className="flex relative justify-between items-center -mb-4 w-full h-10 bg-gray-50 rounded-t-md dark:bg-gray-700">
        <div className="inline-flex justify-center h-full">
          <div className="inline-flex items-center ml-4 space-x-2 h-full">
            <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/50"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/50"></span>
          </div>
          <div className="inline-flex items-center p-2 ml-6 rounded-t-md">
            <div className="font-mono text-xs font-normal text-gray-700 whitespace-normal break-all dark:text-gray-100">
              {title}
            </div>
          </div>
        </div>
        <button
          className="inline-flex p-1.5 mr-2 rounded-md rounded-t-md ring-pink-300 duration-300 outline-none hover:ring-2 hover:ring-pink-300 hover:opacity-100 hover:cursor-pointer hover:outline-none focus:ring-2 focus:ring-pink-300 focus:opacity-100 focus:outline-none transition-hover dark:ring-palevioletred dark:hover:ring-2 dark:hover:ring-palevioletred dark:focus:ring-palevioletred"
          onClick={copyCode}
        >
          {success ? (
            <svg
              className="w-4 h-4 opacity-100 transition-all duration-1000"
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
              className="w-4 h-4 opacity-100 transition-all duration-1000"
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
        </button>
      </div>
      <div className="z-10" ref={codeWrapperRef}>
        {children}
      </div>
    </div>
  )
}

export default CodeEditor
