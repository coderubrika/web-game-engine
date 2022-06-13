import React from 'react'
import Scene from './Scene'
import Hierarchy from './Hierarchy'
import Project from './Project'
import Game from './Game'

export default function Welcome() {
  return (
    <main>
      <Scene></Scene>
      <Game></Game>
      <Hierarchy></Hierarchy>
      <Project></Project>
    </main>
  )
}