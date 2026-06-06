import { useEffect, useState } from 'react'
import './App.css'
import TodoContainer from './component/TodoContainer'
import InputContainer from './component/InputContainer'

function App() {

  const [inputval, setInputval] = useState("")
  const [Todos, setTodos] = useState(() => {
    const data = localStorage.getItem("todolist");
    return data ? JSON.parse(data) : [];
  });

  function getInput(e) {
    setInputval(e.target.value);
  }

  function addTodo() {
    if (inputval !== "") {
      setTodos((prevTodos) => [...prevTodos, inputval]);
      setInputval("");

    }

  }
  function delTodo(todoIndex) {
    setTodos((prevTodos) => prevTodos.filter((prevTodos, prevTodosIndex) => {
      return prevTodosIndex !== todoIndex;
    }))
  }
  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(Todos));
  }, [Todos]);




  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer inputval={inputval} getInput={getInput} addTodo={addTodo} />
      <TodoContainer Todos={Todos} delTodo={delTodo} />
    </main>

  );
}

export default App