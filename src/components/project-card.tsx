import { useState, useEffect } from "react"
import { Parallax } from "react-scroll-parallax"
import Image from "next/image"
import Link from "next/link"
import { Project } from "../types/project"
import Icon from "./icon"

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
      className="lg:mx-4 opacity-0 animate-fade_in drop-shadow-md"
      style={{ ["--index" as string]: index }}
    >
      <div className="relative m-4 bg-gray-100 dark:bg-gray-800 rounded-xl group">
        <div className="relative z-10 flex flex-col transition duration-500 bg-gray-100 dark:bg-gray-700 rounded-xl">
          {url && (
            <Link href={url}>
              <a
                style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 80%)" }}
                tabIndex={-1}
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 w-full h-32 mb-2 overflow-y-hidden bg-gray-200 dark:bg-gray-600 rounded-t-xl hover:cursor-pointer"
              >
                {imageImport && (
                  <Parallax y={[0, randomNumber(60, 120)]}>
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
              </a>
            </Link>
          )}

          <div className="relative z-10 p-6 pb-2 mx-2 overflow-hidden overflow-y-visible ">
            {url && (
              <Link href={url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono font-extralight text-gray-600 transition-all duration-300 dark:hover:text-palevioletred dark:text-gray-100 hover:text-pink-300 md:text-xl outline-none hover:outline-none focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-100 focus:dark:ring-offset-gray-800 focus:ring-pink-300 focus:dark:ring-palevioletred rounded-sm"
                >
                  {name}
                </a>
              </Link>
            )}
            <div className="flex pt-1 md:pt-4">
              <span
                className="font-light text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          </div>

          <div className="relative z-10 flex p-6 align-middle rounded-b-xl">
            <div className="relative z-10 flex justify-around w-full overflow-hidden">
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
        <div className="absolute z-0 w-64 pattern-dots-md -bottom-4 -right-4 h-64 text-palevioletred" />
      </div>
    </div>
  )
}

export default ProjectCard
