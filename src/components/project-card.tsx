import { useState, useEffect } from "react"
import { Parallax } from "react-scroll-parallax"
import Image from "next/image"
import Link from "next/link"
import { Project } from "../types/project"
import { Icon } from "@/components/dynamic-icon"

interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
}

interface StaticRequire {
  default: StaticImageData
}

type StaticImport = StaticRequire | StaticImageData

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
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
    <div className="mx-8">
      <div className="relative m-4">
        <div className="relative z-10 flex flex-col transition duration-500 bg-gray-100 shadow-md dark:bg-gray-800 rounded-xl hover:shadow-sm-smooth">
          {url && (
            <Link href={url}>
              <a
                style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 80%)" }}
                className="z-10 w-full h-32 mb-2 overflow-y-hidden bg-gray-200 dark:bg-gray-600 rounded-t-xl hover:cursor-pointer"
              >
                {imageImport && (
                  <Parallax y={[0, -25]}>
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

          <div className="relative z-10 p-6 pb-2 mx-2 overflow-hidden overflow-y-visible">
            {url && (
              <Link href={url}>
                <a>
                  <div className="text-lg font-semibold text-gray-600 transition-colors duration-300 dark:hover:text-pink-300 dark:text-gray-200 hover:text-palevioletred md:text-xl">
                    {name}
                  </div>
                </a>
              </Link>
            )}
            <div className="flex pt-1 md:pt-4">
              <span
                className="font-light text-gray-400"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          </div>

          <div className="relative z-10 flex px-6 py-4 align-middle">
            <div className="relative z-10 flex justify-around w-full overflow-hidden">
              {tech &&
                tech.map((type) => (
                  // @ts-ignore
                  <Icon key={type} name={type} height="32" width="32" />
                ))}
            </div>
          </div>
        </div>
        <div className="absolute z-0 w-56 pattern-dots-md -bottom-8 -left-8 h-52 text-palevioletred" />
      </div>
    </div>
  )
}

export default ProjectCard
