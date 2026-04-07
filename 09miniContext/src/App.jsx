import Profile from './components/Profile';
import Login from './components/Login';
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return(
    <>
      <UserContextProvider>
        <br/> <br/>
        <Login />
        <br/>
        <br/>
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
