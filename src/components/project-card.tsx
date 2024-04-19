import Image from "next/image"
import Link from "next/link"
import Icon from "@/components/icon"
import { Parallax } from "react-scroll-parallax"
import { type Project } from "@/types/project"

type Props = {
  index: number
  project: Project
}

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min * -1
}

const ProjectCard = ({ project, index }: Props) => {
  const { name, url, desc, image, tech } = project

  return (
    <div className="opacity-0 animate-fade_in" style={{ ["--index" as string]: index }}>
      <div className="relative bg-gray-100 rounded-xl shadow-sm dark:bg-gray-800 group">
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

          <div className="overflow-hidden overflow-y-visible relative z-10 p-6 pb-2">
            {url && (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="items-center p-1 font-mono font-extralight text-gray-600 rounded-sm transition-all duration-300 outline-none md:text-lg dark:text-gray-100 hover:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none flex-inline dark:hover:text-palevioletred hover:text-palevioletred focus:dark:ring-palevioletred focus:dark:ring-offset-gray-800"
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
            <div className="flex pt-1 md:pt-4">
              <span
                className="font-light text-gray-500 dark:text-gray-400"
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
