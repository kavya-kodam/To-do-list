import React from 'react'

function Todo({todo, index, delTodo}) {
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