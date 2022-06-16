import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { Stats, OrbitControls } from "@react-three/drei"
import Window from './ui/Window'
import Box from './primitives/Box'

export default function Scene() {

  return (
    <Window header={'Scene'}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </Window>
  )
}
