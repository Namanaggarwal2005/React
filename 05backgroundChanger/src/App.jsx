import { useState } from 'react'
import './App.css'

function App() {
    const [background, setBackground] = useState('white')
    
    const changeBackground = (color) => {
      setBackground(color);
    }
  return (
    <>
  <div className="App" style={{ backgroundColor: background }}>
      <h1>Background Changer</h1>
      <button onClick={() => changeBackground('red')}>Red</button>
      <button onClick={() => changeBackground('green')}>Green</button>
      <button onClick={() => changeBackground('blue')}>Blue</button>
    </div>  

    </>
  )
}

export default App
