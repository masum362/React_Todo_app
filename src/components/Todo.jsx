import React from 'react'

import style from './todo.module.css'

const Todo = (props) => {

  const handleTrush = (id) =>{
    props.onRemoveTodos(id)

  }
    const {title,desc} = props.todo
    const {id} = props
  return (
    <article className={style.todo}>
        <div>
           <h3> {title}</h3>
            <p>{desc}</p>
            
        </div>
        <div>
                <button className={style.btn} onClick={()=>handleTrush(id)}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>
    </article>
  )
}

export default Todo