import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);



  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1>Sut's Todo List </h1>
        </header>
        <Form 
          inputText={inputText}
          setInputText={setInputText}
          todos = {todos}
          setTodos = {setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
        <Footer todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
