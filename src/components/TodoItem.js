import React from 'react';



function TodoItem({ todo: { title, description, time, id }, deleteTodo }) {

    return (
        <div className="App_todo_list_item">
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h4>{time}</h4>
            <button onClick={function () {
                deleteTodo(id);
            }}>Delete</button>
            <button>Edit</button>
        </div>
    );
}


export default TodoItem; 