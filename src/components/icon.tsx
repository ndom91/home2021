import { lazy, Suspense } from "react"

const Icon = ({ name = "react", ...rest }) => {
  const Svg = lazy(() => {
    return import(`./../../public/assets/img/tech/${name}.svg`)
  })

  return (
    <Suspense fallback={<div>L</div>}>
      <Svg className="size-8" {...rest} />
    </Suspense>
  )
}

export default Icon
