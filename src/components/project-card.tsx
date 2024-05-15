import Image from "next/image"
import Link from "next/link"
import Icon from "@/components/icon"
import { Parallax } from "react-scroll-parallax"
import { type Project } from "@/types"

type Props = {
  index: number
  project: Project
}

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min * -1
}

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const ProjectCard = ({ project, index }: Props) => {
  const { name, url, desc, image, tech } = project

  return (
    <div
      style={{
        // @ts-expect-error setting css variable
        "--imagerotation": `${randomInteger(-2, 2)}deg`,
        animationDelay: `${75 * index}ms`,
      }}
      className={`opacity-0 transition-transform duration-300 hover:rotate-[var(--imagerotation)] hover:-translate-y-4 animate-fade_in ease-[var(--ease-elastic-out-2)]`}
    >
      <div className="relative bg-gray-50 rounded-xl shadow-sm dark:bg-gray-700 group">
        <div className="flex relative z-10 flex-col bg-gray-50 rounded-xl transition duration-500 dark:bg-gray-800">
          {url && (
            <Link
              href={url}
              style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 80%)" }}
              tabIndex={-1}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-y-hidden z-10 mb-2 w-full h-32 bg-gray-200 rounded-t-xl dark:bg-gray-600 hover:cursor-pointer"
            >
              <Parallax translateY={[0, randomNumber(60, 120)]} className="relative h-full">
                <Image
                  src={`/assets/img/screenshots/${image}`}
                  id={`project-image-${image}`}
                  alt={`${name} Image`}
                  quality="100"
                  sizes={"100%"}
                  width="320"
                  height="120"
                  className="object-cover object-top w-full rounded-t-xl"
                />
              </Parallax>
            </Link>
          )}

          <div className="relative z-10 py-1 px-6">
            {url && (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="items-center p-1 font-mono font-thin text-gray-600 rounded-sm transition-all duration-300 outline-none md:text-lg dark:text-gray-100 hover:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none flex-inline dark:hover:text-palevioletred hover:text-palevioletred focus:dark:ring-palevioletred focus:dark:ring-offset-gray-800"
              >
                <span>{name}</span>
                <svg
                  className="inline mb-1 ml-2 size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            )}
            <div className="flex p-1 md:pt-4">
              <span
                className="text-gray-400 dark:text-gray-400 font-base"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          </div>

          <div className="flex relative z-10 p-6 align-middle rounded-b-xl">
            <div className="flex overflow-hidden relative z-10 justify-around w-full">
              {tech &&
                tech.map((type) => (
                  <span title={type} key={type}>
                    <Icon name={type} alt={`${type} icon`} height="32" width="32" />
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
