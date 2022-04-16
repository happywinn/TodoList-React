import React from "react";


const Footer = ({todos, setTodos}) => {

    const clearAllHandler = (e) => {
      setTodos([]);
    };

    return(
     <div className="footer">
       <span className="tasks">You have <b>{todos.length}</b> more tasks.</span>
       <button onClick={clearAllHandler} className="clearbtn">Clear All</button>
     </div>
    );
};

export default Footer;