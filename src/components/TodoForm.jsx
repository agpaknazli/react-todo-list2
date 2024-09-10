import React, { useState } from 'react'

export default function TodoForm({addTodo}) {

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value==="")return alert("Please Enter a Value")

        //! bir baska yoluda
        // const value = e.target[0].value 

        // setTodos([...todos, {title:value}]);
        addTodo(value)
        
setValue("");

        console.log(value);
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit} >
            <input className='todo-input' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter Your Todo' type="text" name="todo" id="todo" />
            <button type='submit' className='todo-btn'>Add New Task</button>
        </form>
    )
}
