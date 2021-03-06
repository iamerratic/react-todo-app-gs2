import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, toggleEdit }) {

    return (
        <section className="App_todo_list">
            {todos.length === 0 ? (
                <div>No Todos To Display</div>
            ) : todos.map(function (todo) {
                return (
                    <TodoItem deleteTodo={deleteTodo} key={todo.id} todo={todo} toggleEdit={toggleEdit} />
                );
            })}
        </section>
    );
}


export default TodoList;