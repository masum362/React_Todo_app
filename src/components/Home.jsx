import React,{useState} from 'react';
import {v4 as uuid4} from 'uuid';

import style from './home.module.css';
import Newtodo from './NewTodo';
import Todos from './Todos';



 const Home = () => {
  const [todos, setTodos] = useState([])
  const handleAddTodo = (todo) =>{
    setTodos((prevTodo) =>{
      return[...prevTodo , {id:uuid4(), todo}]
    })
  }
  const handleRemoveTodos = (id) =>{
    // const filterTodos = todos.filter((todo)=> todo.id !==id );
    setTodos((prevTodo)=>{
      const filterTodos = prevTodo.filter((todo)=> todo.id !==id );
      return filterTodos;
    }); 
  }
  
  return (
    <div className={style.container}>
      <h1 className={style.title}>Todo App</h1>
      <Newtodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodos={handleRemoveTodos} />
    </div>
  )
}
export default Home
 