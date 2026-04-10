import { ThemeProvider } from "./contexts/theme";
import { useEffect, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [theme,setTheme] = useState("light");
  
  function darkTheme(){
    setTheme('dark');
  }
  function lightTheme(){
    setTheme('light');
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(theme);
  },[theme])
  return (
    <>
      <ThemeProvider value={{theme,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex align-middle justify-center mb-4">
               <ThemeBtn />
            </div>
  
            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
