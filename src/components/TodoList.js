import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo }) {

    return (
        <section className="App_todo_list">
            {todos.length === 0 ? (
                <div>No Todos To Display</div>
            ) : todos.map(function (todo) {
                return (
                    <TodoItem deleteTodo={deleteTodo} key={todo.id} todo={todo} />
                );
            })}
        </section>
    );
}


export default TodoList;