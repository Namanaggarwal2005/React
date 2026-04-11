import { useContext, useEffect, useState } from "react";
import {TodoContextProvider,TodoContext,useTodo} from '../contexts/index'
import  TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";

//Note: According to me todo is a String 

function App() {
  const [todos, setTodos] = useState([]);

function addTodo(todoString){
  setTodos((prev) => [
    ...prev,
    {
      id: Date.now(),
      todo: todoString,
      completed: false,
    }
  ]);
}

function updateTodo(id, todoString){
  setTodos((prev) =>
    prev.map((todo) =>
      todo.id === id
        ? { ...todo, todo: todoString }
        : todo
    )
  );
}

function deleteTodo(id){
  setTodos((prev) =>
    prev.filter((todo) => todo.id !== id)
  );
}

function toggleComplete(id){
  setTodos((prev) =>
    prev.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
}

  useEffect(() => {
    try {
      const stored = localStorage.getItem('todos');
      const todos = stored ? JSON.parse(stored) : [];
      setTodos(todos);
    } catch (error) {
      console.error("Invalid JSON in localStorage");
      setTodos([]);
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
  return (
    <TodoContextProvider value={{todos,deleteTodo,updateTodo,addTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
              <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos?.map((todo)=>(
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo}/>
                </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
