import React from 'react';


const Form = ({inputText,setInputText, todos, setTodos}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();  // for prevent page refresh
        if(inputText !== ""){
            setTodos([
                ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
            ]);
            setInputText('');
        }
        
    };


    return(
    <form>
        <div className="inputField">
          <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Enter new task" className="todo-input" />
          <button onClick={submitTodoHandler} className="todo-button" type="submit"> 
              <i className="fas fa-plus"></i> 
          </button>
        </div>
    </form>
    );
};

export default Form;