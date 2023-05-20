import React, {useState} from 'react'

import style from './newtodo.module.css'
const Newtodo = (props) => {
    const [todo,setTodo] = useState({title:"",desc:""})
    const {title, desc} = todo;
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTodo((prevTodo)=>{
            return{
                ...prevTodo , [name]:[value]
            };
        })   
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.title ==='' || todo.desc===''){
            alert('please fill the boxes')
        }
        else{
            props.onAddTodo(todo)
        }
        setTodo({title:"",desc:""})
        
    }

    return (
   <form className={style.form} onSubmit={handleSubmit}>
    <div className={style["form-field"]}>
        <label htmlFor="title">Title : </label>
        <input type="text" id='title' name='title' value={title}  onChange={handleChange} />
    </div>
    <div className={style["form-field"]}>
        <label htmlFor="desc">Description : </label>
        <textarea name="desc" id="desc" value={desc} onChange={handleChange}  ></textarea>
    </div>
    <button type='submit'>Add Todo</button>
   </form>
  )
}

export default Newtodo