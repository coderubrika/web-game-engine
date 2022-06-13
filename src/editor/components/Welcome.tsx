import React from 'react'
import Scene from './Scene'
import Hierarchy from './Hierarchy'
import Project from './Project'
import Game from './Game'
import Inspector from './Inspector'

export default function Welcome() {
  return (
    <main>
      <Scene></Scene>
      <Game></Game>
      <Hierarchy></Hierarchy>
      <Inspector></Inspector>
      <Project></Project>
    </main>
  )
}