import React from 'react'
import { TodoContext } from './Context/TodoContext';
import { useContext } from 'react'

function InputContainer() {
  const {inputval, getInput, addTodo} = useContext(TodoContext);
  return (
    <div className="input-container">
      <input type="text" value={inputval} onChange={getInput} />
      <button className='addbtn' onClick={addTodo}>+</button >
    </div>
  )
}

export default InputContainer