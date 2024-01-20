import { useState, useRef, useEffect } from "react"

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string
  alt: string
}

const Icon: React.FC<IconProps> = ({ name = "react", ...rest }): JSX.Element | null => {
  const ImportedIconRef = useRef<{ src: string }>()
  const [loading, setLoading] = useState(false)

  useEffect((): void => {
    setLoading(true)
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(`./../../public/assets/img/tech/${name}.svg`)
        ).default
      } catch (err) {
        console.error("[SVG Error]", err)
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [name])

  if (!loading && ImportedIconRef.current) {
    return <img style={{ height: "32px" }} src={ImportedIconRef.current.src} {...rest} />
  }

  return null
}

export default Icon
