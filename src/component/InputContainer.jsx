import React from 'react'

function InputContainer({inputval, getInput, addTodo}) {
  return (
    <div className="input-container">
        <input type="text"  value={inputval} onChange={getInput}/>
        <button className='addbtn' onClick={addTodo}>+</button >
      </div>
  )
}

export default InputContainer