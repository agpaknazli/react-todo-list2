import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'

export default function TodoWrapper() {

const [todos, setTodos]=useState([]);

// const handleClick=()=>{
//     setTodos([...todos,{title:""}])
// }

const addTodo=(value)=>{
    setTodos({...todos,title:value})
}




    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done !</h1>
            <TodoForm addTodo={addTodo}/>

          <Todos todos={todos} />
        </div>
    )
}
