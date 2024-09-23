import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [todo,setTodo] = useState([]);
  const input = useRef();
  const addTodo = (e) => {
    e.preventDefault();
    console.log(input.current.value);
    todo.push(input.current.value);
    setTodo([...todo])
    console.log(todo);
    input.current.value = ''
  }
  const deleteTodo = (index) => {
    todo.splice(index,1);
    setTodo([...todo]);
  }
  const editTodo = (index) => {
    const editedVal = prompt('Enter the value');
    todo.splice(index,1,editedVal);
    setTodo([...todo]);
  }
  return (
    <div className='max-w-[1400px] p-4 mx-auto'>
      <Navbar />
      <div className='text-center'>
        <h1 className='mt-5 font-semibold text-white text-2xl'>Todo App</h1>
        <form onSubmit={addTodo}>
        <input ref={input} type="text" placeholder="Type here" className="input mt-10 input-bordered w-full max-w-xs" />
        <button className="btn ms-2 hover:bg-white hover:text-black border-[#1d232a] bg-[#1d232a]">Add</button>
        </form>
      </div>
      <div className="mt-10 mycontainer">
        {todo.map((item,index)=>{
          return <div key={index} className="flex my-5 justify-between items-center">
            <h1 className="font-semibold text-center text-2xl">{item}</h1>
            <div className="flex items-center">
            <i onClick={()=> editTodo(index)} class="fa-solid text-lg cursor-pointer ml-3 fa-pen-to-square"></i>
            <i onClick={()=> deleteTodo(index)} class="fa-solid text-lg cursor-pointer ml-5 fa-trash"></i>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default App