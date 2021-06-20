import { useState, useEffect } from "react"
import { Parallax } from "react-scroll-parallax"
import Image from "next/image"
import Link from "next/link"
import { Project } from "../types/project"
import NextIcon from "@/assets/img/tech/react.svg"

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

  // tech.forEach(item => {
  //   import `${item}` from `/assets/img/tech/${item}.svg`
  // })

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
        <div className="relative z-10 flex flex-col bg-gray-100 dark:bg-gray-800 rounded-xl hover:shadow-2xl shadow-md transition duration-500">
          {url && (
            <Link href={url}>
              <a
                style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 80%)" }}
                className="z-10 mb-2 w-full h-32 bg-gray-200 dark:bg-gray-600 rounded-t-xl hover:cursor-pointer"
              >
                {imageImport && (
                  <Parallax y={[0, -20]}>
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

          <div className="relative z-10 mx-2 p-6 pb-2 overflow-hidden overflow-y-visible">
            {url && (
              <Link href={url}>
                <a>
                  <div className="dark:hover:text-pink-300 dark:text-gray-200 text-gray-600 hover:text-palevioletred text-lg font-semibold transition-colors duration-300 md:text-xl">
                    {name}
                  </div>
                </a>
              </Link>
            )}
            <div className="flex pt-1 md:pt-4">
              <span
                className="text-gray-400 font-light"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          </div>

          <div className="relative z-10 flex align-middle px-6 py-4">
            <div className="relative z-10 flex justify-around w-full overflow-hidden">
              {tech &&
                tech.map((type) => (
                  <Image
                    alt={`${type.charAt(0).toUpperCase() + type.slice(1)} Logo`}
                    className="text-black dark:text-white fill-current"
                    height="32"
                    width="32"
                    key={type}
                    title={type.charAt(0).toUpperCase() + type.slice(1)}
                    src={`/assets/img/tech/${type}.svg`}
                  />
                ))}
              <NextIcon width="32" height="32" />
            </div>
          </div>
        </div>
        <div className="pattern-dots-md absolute z-0 -bottom-8 -left-8 w-56 h-52 text-palevioletred" />
      </div>
    </div>
  )
}

export default ProjectCard
