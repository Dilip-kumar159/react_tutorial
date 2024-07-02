import { useState } from 'react'

function App() {

  const [color, setColor] = useState('white');

  return (
    <div className='w-full h-screen'
    style={{backgroundColor:color}}>

      <h1 className="text-center text-black p-4 font-bold text-5xl">Welcome To Background Color Changer</h1>

      <div className='fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2'>
      
      <div className='flex flex-wrap justity-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' >

        <button onClick={() => setColor("red")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "red"}}> Red</button>
        <button onClick={() => setColor("green")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "Green"}}> Green</button>
        <button onClick={() => setColor("yellow")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "Yellow"}}> Yellow</button>
        <button onClick={() => setColor("blue")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "Blue"}}> Blue</button>
        <button onClick={() => setColor("lavender")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "lavender"}}> Lavender</button>
        <button onClick={() => setColor("pink")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "pink"}}> pink</button>
        <button onClick={() => setColor("orange")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "orange"}}> orange</button>
        <button onClick={() => setColor("brown")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "brown"}}> Brown</button>
        <button onClick={() => setColor("aqua")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "aqua"}}> Aqua Blue</button>
        <button onClick={() => setColor("olive")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "olive"}}> Olive</button>


      </div>
      </div>
    </div>

  
  )
}

export default App
