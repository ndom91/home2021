import React, { FC, useRef, useEffect } from "react"
// https://stackoverflow.com/questions/61339259/how-to-dynamically-import-svg-and-render-it-inline

interface IconProps {
  name: string
  options: {
    onCompleted?: (
      name: string,
      SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
    ) => void
    onError?: (err: Error) => void
  }
}

export const Icon: FC<IconProps> = ({ name, ...rest }): JSX.Element | null => {
  // @ts-ignore
  const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>> | any>()
  const [loading, setLoading] = React.useState(false)
  useEffect((): void => {
    setLoading(true)
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!./../../public/assets/img/tech/${name}.svg`
          )
        ).default
      } catch (err) {
        throw err
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [name])

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef
    return <ImportedIcon {...rest} />
  }
  return null
}
