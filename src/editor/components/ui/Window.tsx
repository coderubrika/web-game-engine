import React from 'react'
import { WindowProps } from '../../types.t'

export default function Window({header, children}: WindowProps) {

  return (
    <div className='window' id={header?.toLowerCase()}>
      <header>{header}</header>
      <div className='content'>
        {children}
      </div>
    </div>
  )
}
