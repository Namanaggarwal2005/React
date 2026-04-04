import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const createPassword = useCallback(() => {
    let password = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numAllowed) string += '0123456789';
    if(charAllowed) string += '!@#$%^&*()_+';
    for(let i = 0; i < length; i++) {
      password += string[Math.floor(Math.random() * string.length)]
    }
    setPassword(password);
    

  },
  [length, numAllowed, charAllowed, setLength]);

  useEffect(() => {
    createPassword();
  },[length, numAllowed, charAllowed, createPassword, setLength])

  const passwordRef = useRef(null);

  const copyClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  

  const [bgColor, setBgColor] = useState("blue");

  const handleClick = () => {
    copyClipboard();
    setBgColor("darkblue");
    setTimeout(() => {
      setBgColor("blue");
    }, 150);
  };


  return (
    <>
    <div class="bg-gray-800 p-4 rounded-xl w-\[420px\] shadow-lg">
    
  
    <div class="flex overflow-hidden rounded-lg">
      <input 
        type="text" 
        value={password} 
        readonly
        className="flex-1 px-4 py-2 bg-gray-200 text-orange-500 font-semibold outline-none"
        ref={passwordRef}
      />
    <button className=" 
      text-white px-4 
      hover:bg-blue-700
      " onClick={handleClick} style={{backgroundColor: bgColor}}>
        copy
      </button>
    </div>


    <div className="flex items-center gap-3 mt-4 text-orange-400 text-sm">
      
    value
   <input 
        type="range" 
        min="6" 
        max="32" 
        value={length}
        className="w-28 cursor-pointer"
        onChange={(e) => setLength(e.target.value)}
      />
      <span>Length ({length})</span>


      <label className="flex items-center gap-1 cursor-pointer">
        <input type="checkbox" 
        className="accent-blue-500" 
        onChange={() => setNumAllowed(!numAllowed)}/>
        Numbers
      </label>


      <label className="flex items-center gap-1 cursor-pointer">
        <input type="checkbox" className ="accent-blue-500" 
        onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }}/>
        Characters
      </label>

    </div>

  </div>
    </>
  )
}

export default App
