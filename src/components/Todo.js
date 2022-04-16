import React from "react";

const Todo = ({todo, todos, setTodos, text}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        removeLocalTodos();
     };

    const completeHandler = (e) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    };

    const removeLocalTodos = () => {
        if(localStorage.getItem('todos') === null) {
            todos = [];
        }else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
    } 

    return(
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed":""}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
};

export default Todo;