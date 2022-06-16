import { Canvas } from '@react-three/fiber'
import React from 'react'
import Box from './primitives/Box'
import Window from './ui/Window'

export default function Game() {
  return (
    <Window header={'Game'}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </Window>
  )
}
