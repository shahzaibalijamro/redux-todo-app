import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, removeTodo } from './config/redux/reducers/todoSlice';

const App = () => {
  const [todo, setTodo] = useState([]);
  const selector = useSelector(state => state.todos.todo);
  const dispatch = useDispatch()
  const input = useRef();
  const addTodoInRedux = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      title: input.current.value
    }))
    input.current.value = ''
  }
  const deleteTodoInRedux = (index) => {
    dispatch(removeTodo({
      index,
    }))
  }
  const editTodoInRedux = (index) => {
    const editedVal = prompt('Enter the value');
    dispatch(editTodo({
      index,
      editedVal,
    }))
  }
  return (
    <div className='max-w-[1400px] px-4 mx-auto'>
      <Navbar />
      <div className='text-center'>
        <h1 className='mt-5 font-semibold text-white text-2xl'>Todo App</h1>
        <form onSubmit={addTodoInRedux}>
          <input ref={input} type="text" placeholder="Type here" className="input mt-10 mb-4 input-bordered w-full max-w-xs" required/>
          <button className="btn ms-2 hover:bg-white hover:border-[#383f47] hover:bg-[#1d232a] hover:text-white border-[#1d232a] bg-white text-[#1d232a]">Add</button>
        </form>
      </div>
      <div className="mt-10 mycontainer">
        {selector.length > 0 ? selector.map((item, index) => {
          return <div key={item.id} className="flex my-5 justify-between items-center">
            <h1 className="font-semibold text-center text-2xl">{item.title}</h1>
            <div className="flex items-center">
              <i onClick={() => editTodoInRedux(index)} class="fa-solid text-lg cursor-pointer ml-3 fa-pen-to-square"></i>
              <i onClick={() => deleteTodoInRedux(index)} class="fa-solid text-lg cursor-pointer ml-5 fa-trash"></i>
            </div>
          </div>
        }) : <p className='text-center mt-10'>No Todo Found</p>}
      </div>
    </div>
  )
}

export default App