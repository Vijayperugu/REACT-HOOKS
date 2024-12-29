import React ,{useContext}from 'react'
import { usercomponents } from '../App'

function UserrContext() {
    const {theme,setthem} =useContext(usercomponents)
  return (
    <button onClick={()=> setthem(() => (theme === 'light' ? 'dark' : 'light'))}>
        Toggle

    </button>
  )
}

export default UserrContext