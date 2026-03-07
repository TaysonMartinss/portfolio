import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

interface DragState {
  isDragging: boolean
  x: number
  y: number
}

function Model({ dragRef }: { dragRef: React.MutableRefObject<DragState> }) {
  const groupRef = useRef<THREE.Group>(null)
  const autoY = useRef(0)
  const smoothX = useRef(0)
  const smoothY = useRef(0)
  const { scene } = useGLTF('/model.glb')

  useFrame((_, delta) => {
    if (!groupRef.current) return

    autoY.current += delta * 0.4

    if (!dragRef.current.isDragging) {
      dragRef.current.x = THREE.MathUtils.lerp(dragRef.current.x, 0, delta * 2)
      dragRef.current.y = THREE.MathUtils.lerp(dragRef.current.y, 0, delta * 2)
    }

    smoothX.current = THREE.MathUtils.lerp(smoothX.current, dragRef.current.x, delta * 10)
    smoothY.current = THREE.MathUtils.lerp(smoothY.current, dragRef.current.y, delta * 10)

    groupRef.current.rotation.x = smoothX.current
    groupRef.current.rotation.y = autoY.current + smoothY.current
  })

  return (
    <group ref={groupRef} position={[2.8, -1.5, 0]}>
      {/* Loaded GLB model */}
      <primitive object={scene} scale={2} />

      {/* Orbit ring 1 — equatorial */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.4, 0.012, 8, 100]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.7} />
      </mesh>

      {/* Orbit ring 2 — tilted */}
      <mesh rotation={[Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.75, 0.008, 8, 100]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.4} />
      </mesh>

      {/* Orbit ring 3 — opposite tilt */}
      <mesh rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
        <torusGeometry args={[3.05, 0.006, 8, 100]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.2} />
      </mesh>
    </group>
  )
}

export default function Scene3D() {
  const dragRef = useRef<DragState>({ isDragging: false, x: 0, y: 0 })
  const prevMouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      // Only start drag if clicking on the right half of the screen
      if (e.clientX < window.innerWidth / 2) return
      dragRef.current.isDragging = true
      prevMouse.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.isDragging) return
      dragRef.current.x += (e.clientY - prevMouse.current.y) * 0.008
      dragRef.current.y += (e.clientX - prevMouse.current.x) * 0.008
      prevMouse.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseUp = () => { dragRef.current.isDragging = false }

    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <>
      {/* Full screen canvas — pointer-events-none so it never blocks clicks */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ toneMappingExposure: 1.5 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[6, 6, 6]} intensity={5} color="#22d3ee" />
          <pointLight position={[-5, -5, 4]} intensity={2} color="#6366f1" />
          <pointLight position={[0, 5, -4]} intensity={1.5} color="#0891b2" />
          <pointLight position={[3, 0, 3]} intensity={14} color="#22d3ee" />
          <Model dragRef={dragRef} />
          <EffectComposer>
            <Bloom
              intensity={2.2}
              luminanceThreshold={0.15}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
          </EffectComposer>
        </Canvas>
      </div>
    </>
  )
}

