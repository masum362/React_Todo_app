import React from 'react'

import Todo from './Todo'
import style from './todos.module.css'

function Todos(props) {
    // console.log(props.todos)
  return (
    <section className={style.todos}>
        {props.todos.map(todo => <Todo todo={todo.todo} id={todo.id} onRemoveTodos={props.onRemoveTodos} />)}
    </section>
  )
}

export default Todos

