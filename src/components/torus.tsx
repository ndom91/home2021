// Threejs example: threejs.org/examples/?q=asc#webgl_effects_ascii
import { useEffect, useRef, useState, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useCursor } from "@react-three/drei"
import { AsciiEffect } from "three-stdlib"
import useStore from "../lib/zustand"

export default function Torus() {
  return (
    <div className="pointer-events-all h-[38rem] w-[60%] hover:cursor-move">
      <Canvas shadows>
        <color attach="background" args={["black"]} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Torusknot scale={1.3} castShadow />
        <OrbitControls autoRotate autoRotateSpeed={0.3} />
        <AsciiRenderer invert />
      </Canvas>
    </div>
  )
}

function Torusknot(props: any) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame(
    (state, delta) =>
      // @ts-ignore
      (ref.current.rotation.x = ref.current.rotation.y += delta / 2)
  )
  return (
    <mesh
      {...props}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={ref}
      // onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  )
}

function AsciiRenderer({
  renderIndex = 1,
  characters = " .:-+*=%@#",
  ...options
}) {
  // Reactive state
  const { size, gl, scene, camera } = useThree()
  const theme = useStore((state) => state.theme)

  // Create effect
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, options)
    effect.domElement.style.position = "absolute"
    effect.domElement.style.top = "0"
    effect.domElement.style.left = "0"
    effect.domElement.style.color = theme === "light" ? "#F8BD96" : "#DDB6F2"
    effect.domElement.style.fontWeight = "900"
    effect.domElement.style.backgroundColor =
      theme === "light" ? "white" : "#0e141b"
    effect.domElement.style.pointerEvents = "none"
    return effect
  }, [characters, options.invert])

  // Append on mount, remove on unmount
  useEffect(() => {
    gl.domElement.parentNode.appendChild(effect.domElement)
    return () => gl.domElement.parentNode.removeChild(effect.domElement)
  }, [effect])

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height)
  }, [effect, size])

  // Take over render-loop (that is what the index is for)
  useFrame((state) => {
    effect.render(scene, camera)
  }, renderIndex)

  // This component has no view, it is a logical component
  return null
}
