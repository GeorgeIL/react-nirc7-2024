import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EHead1 from './Elements/ETitle'
import Calc from './Class Comps/Calc'
function App() {
  return (
    <>
      {EHead1} {/* This is an Element */}
      <Calc />
    </>
  )
}

export default App
