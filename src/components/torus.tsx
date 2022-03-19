// Threejs example: threejs.org/examples/?q=asc#webgl_effects_ascii
import { useEffect, useRef, useState, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useCursor } from "@react-three/drei"
import { AsciiEffect } from "three-stdlib"
import useStore, { useLiveStore } from "../lib/zustand"

export default function Torus() {
  return (
    <div className="pointer-events-all h-96 w-full select-none hover:cursor-move md:h-[38rem] md:w-[60%]">
      <Canvas shadows>
        <color attach="background" args={["black"]} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <TorusKnot scale={1.3} />
        <CameraControls />
        <AsciiRenderer invert />
      </Canvas>
    </div>
  )
}

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree()
  const controls = useRef()
  const setTorusRotation = useLiveStore((state) => state.setTorusRotation)
  const torusRotation = useLiveStore((state) => state.torusRotation)

  const updateControls = (e: any) => {
    if (e.target.object.rotation.x !== "undefined") {
      setTorusRotation({
        x: camera.rotation._x,
        y: camera.rotation._y,
        z: camera.rotation._z,
      })
    }
  }
  useFrame(() => {
    console.log("TR", torusRotation)
    // FIXME: this `object.rotation` value seems to change position(?)
    controls.current?.object.rotation.x = torusRotation.x
    controls.current?.object.rotation.y = torusRotation.y
    controls.current?.object.rotation.z = torusRotation.z
    // controls.current?.object.position = [0, 0, 0]
    // controls.current?.update()
  })

  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      // makeDefault
      enableZoom={false}
      enablePan={false}
      onChange={(e) => updateControls(e)}
    />
  )
}

function TorusKnot(props: any) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      {...props}
      ref={ref}
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
  characters = " *:-*=%@#",
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
    effect.domElement.className = "transition-all duration-200"
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
