import { useState } from 'react'

function App() {
  const [color, setColor] = useState('white');
  return (
    <>
      <div className='w-full h-screen '
      style={{backgroundColor: color}}> </div>

      <div className='w-full h-20 flex justify-center items-center gap-5'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={() => setColor('blue')}>Blue</button>
        <button className='px-4 py-2 bg-red-500 text-white rounded' onClick={() => setColor('red')}>Red</button>
        <button className='px-4 py-2 bg-green-500 text-white rounded' onClick={() => setColor('green')}>Green</button>
        <button className='px-4 py-2 bg-yellow-500 text-white rounded' onClick={() => setColor('yellow')}>Yellow</button>
      </div>
    </>
  )
}

export default App



