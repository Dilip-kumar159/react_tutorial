import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind CSS Demo</h1>

      <Card username="Dilip V" btnText="Click Me"/>
      <Card username="Kumar "/>

    </>
  )
}

export default App
