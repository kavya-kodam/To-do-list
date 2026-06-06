import React from 'react';
import Todo from './Todo';

function TodoContainer({Todos , delTodo}) {
  return (
    <div className = "list-container">
        {Todos.map((todo, index )=>{
            return (
                <Todo todo={todo} index={index} delTodo={delTodo}/>
            )
        })}

    </div> 
       )
}

export default TodoContainer