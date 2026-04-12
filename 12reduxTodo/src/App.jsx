import AddTodo from "../components/AddTodo"
import Todos from "../components/Todos"


function App() {
  return(
    <>
        <h1 className='text-center text-4xl p-6'>Hello World</h1>
        <AddTodo />
        <Todos />
    </>
  )
}

export default App
