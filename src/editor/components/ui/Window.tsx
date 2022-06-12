import React from 'react'

export default function Window(props) {

  return (
    <div className='window'>
      <header>{props.header}</header>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}
