import { useState } from 'react'
import axios from 'axios'

function App() {
  const [text,setText] = useState('')
  const TestApi = async () =>{
    await axios.get('http://localhost:3000/home').then((res)=>{
      setText(res.data)
    })
  }

  return (
    <>
    <div className='bg-gray-900 h-screen w-full flex flex-col items-center'>
      <h1 className='text-white text-lg'>Welcome</h1>
      <button type='button' className='text-white bg-blue-600 hover:bg-blue-500 p-1 rounded-md' onClick={()=>{TestApi()}}>Press here</button>
      <p className='text-white'>{text}</p>
    </div>
    </>
  )
}

export default App
