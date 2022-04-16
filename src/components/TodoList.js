import React from "react";
import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {
    console.log(todos);
    return(
      <ul className="todoList">
          {todos.map( todo => (
            <Todo
                todo = {todo}
                todos = {todos}
                setTodos = {setTodos}
                text = {todo.text}
                key = {todo.id}
            />
          ))}
      </ul>
    );
};

export default TodoList;