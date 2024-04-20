const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-4 w-full opacity-0 sm:max-w-screen-sm md:max-w-7xl animate-fade_in">
      <div className="flex gap-4">
        <a
          href="https://github.com/ndom91"
          target="_blank"
          aria-label="Nicos GitHub"
          className="p-1 text-gray-800 rounded-md transition-shadow duration-300 dark:text-gray-100 hover:ring-4 hover:ring-pink-300 focus:ring-4 focus:ring-pink-300 focus:outline-none dark:hover:ring-palevioletred dark:focus:ring-palevioletred"
          rel="noopener noreferrer"
        >
          <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <path
              d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M104,208H72a32,32,0,0,1-32-32A32,32,0,0,0,8,144"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/ndom91"
          target="_blank"
          aria-label="Nicos Twitter"
          className="p-1 text-gray-800 rounded-md transition-shadow duration-300 dark:text-gray-100 hover:ring-4 hover:ring-pink-300 focus:ring-4 focus:ring-pink-300 focus:outline-none dark:hover:ring-palevioletred dark:focus:ring-palevioletred"
          rel="noopener noreferrer"
        >
          <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <path
              d="M88,176S32.85,144,40.78,56c0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24H240l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12S72,200,88,176Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
        </a>
        <a
          rel="me noreferrer"
          href="https://fosstodon.org/@ndom91"
          target="_blank"
          aria-label="Nicos Mastodon"
          className="p-1 text-gray-800 rounded-md transition-shadow duration-300 dark:text-gray-100 hover:ring-4 hover:ring-pink-300 focus:ring-4 focus:ring-pink-300 focus:outline-none dark:hover:ring-palevioletred dark:focus:ring-palevioletred"
        >
          <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <path
              d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M128,136V104a24,24,0,0,0-48,0v32"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M176,136V104a24,24,0,0,0-48,0"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
        </a>
        <a
          href="mailto:home2021[at]ndo[dot]dev"
          target="_blank"
          aria-label="Email Nico"
          className="p-1 text-gray-800 rounded-md transition-shadow duration-300 dark:text-gray-100 hover:ring-4 hover:ring-pink-300 focus:ring-4 focus:ring-pink-300 focus:outline-none dark:hover:ring-palevioletred dark:focus:ring-palevioletred"
          rel="noopener noreferrer"
        >
          <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <line
              x1="108"
              y1="148"
              x2="160"
              y2="96"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M223.69,42.18a8,8,0,0,0-9.87-9.87l-192,58.22a8,8,0,0,0-1.25,14.93L108,148l42.54,87.42a8,8,0,0,0,14.93-1.25Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
