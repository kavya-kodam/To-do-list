import React from 'react';
import Todo from './Todo';
import { TodoContext } from './Context/TodoContext';
import { useContext } from 'react'

function TodoContainer() {
    const { Todos } = useContext(TodoContext);
    return (
        <div className="list-container">
            {Todos.map((todo, index) => {
                return (
                    <Todo key={index} todo={todo} index={index}  />
                )
            })}

        </div>
    )
}

export default TodoContainer