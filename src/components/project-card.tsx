import { useState, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../types/project'
import Icon from './icon'

interface StaticImageData {
  src: string
  height: number
  width: number
}

interface StaticRequire {
  default: StaticImageData
}

type StaticImport = StaticRequire | StaticImageData

type Props = {
  index: number
  project: Project
}

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min * -1
}

const ProjectCard = ({ project, index }: Props) => {
  const { name, url, desc, image, tech } = project
  const [imageImport, setImage] = useState<StaticImport>()
  const loadImage = (imgur: string) => {
    import(`../../public/assets/img/screenshots/${imgur}`).then((image) => {
      setImage(image)
    })
  }
  useEffect(() => {
    if (image) {
      loadImage(image)
    }
  }, [image])

  return (
    <div
      className="opacity-0 lg:mx-4 animate-fade_in drop-shadow-md"
      style={{ ['--index' as string]: index }}
    >
      <div className="relative m-4 bg-gray-100 rounded-xl dark:bg-gray-800 group">
        <div className="flex relative z-10 flex-col bg-gray-50 rounded-xl transition duration-500 dark:bg-gray-800">
          {url && (
            <Link
              href={url}
              style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 80%)' }}
              tabIndex={-1}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-y-hidden z-10 mb-2 w-full h-32 bg-gray-200 rounded-t-xl dark:bg-gray-600 hover:cursor-pointer"
            >
              {imageImport && (
                <Parallax translateY={[0, randomNumber(60, 120)]}>
                  <Image
                    src={imageImport}
                    id={`project-image-${image}`}
                    alt={`${name} Image`}
                    quality="100"
                    layout="responsive"
                    placeholder="blur"
                    className="rounded-t-xl"
                  />
                </Parallax>
              )}
            </Link>
          )}

          <div className="overflow-hidden overflow-y-visible relative z-10 p-6 pb-2">
            {url && (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline font-mono font-extralight text-gray-600 transition-all duration-300 outline-none md:text-lg dark:text-gray-100 hover:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none dark:hover:text-palevioletred hover:text-palevioletred focus:dark:ring-palevioletred focus:dark:ring-offset-gray-800"
              >
                {name}
                <svg
                  className="inline mb-2 ml-2 w-6 h-6"
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
                    <Icon
                      name={type}
                      className="image-color"
                      alt={`${type} icon`}
                      height="32"
                      width="32"
                    />
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="absolute -right-4 -bottom-4 z-0 w-64 h-64 text-palevioletred" />
      </div>
    </div>
  )
}

export default ProjectCard
