const ResumeBanner = () => (
  <a
    href="https://cv.ndo.dev/fullstack/?utm_source=portfolio&utm_medium=banner&utm_campaign=resume"
    target="_blank"
    className="inline-flex absolute -bottom-2 left-1/2 justify-between items-stretch w-full font-mono text-sm font-light text-gray-500 bg-gray-50 rounded-md border transition duration-300 -translate-x-1/2 md:text-base dark:text-gray-300 dark:bg-gray-700 hover:shadow-sm hover:-translate-y-1 min-[500px]:w-max group border-gray-200/30 dark:border-gray-500/30"
  >
    <span className="py-3 px-3">Hiring? Check out my CV</span>
    <div className="flex justify-center items-center w-12 bg-gray-200 rounded-r-md dark:bg-gray-800">
      <div className="overflow-hidden relative size-5">
        <div className="absolute transition-all duration-200 group-hover:translate-x-5 group-hover:-translate-y-5">
          <svg
            className="size-5"
            data-icon="pdf document"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <polyline
              points="216 152 184 152 184 208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="208"
              y1="184"
              x2="184"
              y2="184"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M48,192H64a20,20,0,0,0,0-40H48v56"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M112,152v56h16a28,28,0,0,0,0-56Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <polyline
              points="152 32 152 88 208 88"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          <svg
            className="-translate-x-5 size-5"
            data-icon="download document"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <path
              d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <polyline
              points="152 32 152 88 208 88"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="128"
              y1="120"
              x2="128"
              y2="184"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <polyline
              points="104 160 128 184 152 160"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
        </div>
      </div>
    </div>
  </a>
)

export default ResumeBanner
