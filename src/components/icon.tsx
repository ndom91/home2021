import { useState, useRef, useEffect } from "react"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  alt: string
}

const Icon: React.FC<IconProps> = ({
  name = "react",
  ...rest
}): JSX.Element | null => {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>()
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
    const { current: ImportedIcon } = ImportedIconRef
    return <ImportedIcon {...rest} height={32} width={32} />
  }

  return null
}

export default Icon
