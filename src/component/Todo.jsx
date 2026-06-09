import React from 'react'

import { TodoContext } from './Context/TodoContext';
import { useContext } from 'react'

function Todo({todo, index, }) {
  const {delTodo} = useContext(TodoContext);
  return (
        <div className='todo'>
          <p>{todo}</p>
          <div className="action">
            <input type="checkbox" className='tick' />
            <button className='delete' onClick={()=>delTodo(index)}>delete</button>
          </div>
        </div>
  )
}

export default Todo