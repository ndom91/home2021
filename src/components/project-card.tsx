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
      className="animate-fade_in opacity-0 drop-shadow-md lg:mx-4"
      style={{ ['--index' as string]: index }}
    >
      <div className="group relative m-4 rounded-xl bg-gray-100 dark:bg-gray-800">
        <div className="relative z-10 flex flex-col rounded-xl bg-gray-50 transition duration-500 dark:bg-gray-700">
          {url && (
            <Link href={url}>
              <a
                style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 80%)' }}
                tabIndex={-1}
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 mb-2 h-32 w-full overflow-y-hidden rounded-t-xl bg-gray-200 hover:cursor-pointer dark:bg-gray-600"
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
              </a>
            </Link>
          )}

          <div className="relative z-10 mx-2 overflow-hidden overflow-y-visible p-6 pb-2 ">
            {url && (
              <Link href={url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-block font-medium text-gray-600 outline-none transition-all duration-300 hover:text-palevioletred hover:outline-none focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-100 dark:text-gray-100 dark:hover:text-palevioletred focus:dark:ring-palevioletred focus:dark:ring-offset-gray-800 md:text-lg"
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

          <div className="relative z-10 flex rounded-b-xl p-6 align-middle">
            <div className="relative z-10 flex w-full justify-around overflow-hidden">
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
        <div className="absolute -bottom-4 -right-4 z-0 h-64 w-64 text-palevioletred" />
      </div>
    </div>
  )
}

export default ProjectCard
