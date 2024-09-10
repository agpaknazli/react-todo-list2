import React from 'react'

const Todos = ({todos}) => {
  return (
    <div>

<ul>
    {
  todos.map((todo,i)=>(
    <li key={i} > {todos.title}</li>
  ))}
</ul>


    </div>
  )
}

export default Todos