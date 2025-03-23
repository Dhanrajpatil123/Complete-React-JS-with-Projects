import { useState } from 'react' 
import './App.css'
import Cards from './Component/Cards'

function App() { 

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS With Props</h1>

      <Cards username="Extra Tech" btnText="Visit Me"></Cards>
      <Cards username="Dhanraj" btnText="Click Me"></Cards>
    </>
  )
}

export default App
