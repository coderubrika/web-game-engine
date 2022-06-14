import {React} from 'react'

export interface WindowProps {
  header: string
  children?: React.ReactNode
}

declare module '*.glsl' {
  const value: string
  export default value
}

declare module '*.frag' {
  const value: string
  export default value
}

declare module '*.vert' {
  const value: string
  export default value
}