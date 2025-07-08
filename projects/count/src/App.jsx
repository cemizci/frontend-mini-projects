import { useState } from 'react'
import './App.css'
import ReducerCounter from './ReducerCounter ';


function App() {

  const [count,setCount] = useState(0);

  const increment = () => {
      setCount(count + 1)
  }

  const decrement = () => {
      if(count > 0){
        setCount(count - 1)
      }
  }

  const reset = () => {
      setCount(0)
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='container mx-auto border p-2 rounded-sm '>
      <h2 className='text-center font-bold'>Count</h2>
      <h2 className='bg-green-200 rounded-s-md text-black font-bold py-2 px-4 block text-center  transition duration-300'>{count}</h2>
      <div className='flex gap-2 mt-4'>
      <button onClick={increment} className='flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded'>Arttır</button>
      <button onClick={decrement} className='flex-1 bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded'>Azalt</button>
      <button onClick={reset} className='flex-1 bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Reset</button>
    </div>
    </div>
    <ReducerCounter/>
    </div>
  )
}

export default App
