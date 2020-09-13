function createTodo(todos, newTodo) {

    return [...todos, { ...newTodo, id: getId(todos) }];
}

function deleteTodo(todos, todoId) {

    return todos.filter(function (todo) {
        return todo.id !== todoId;
    });
}

function editTodo(todos, todoId, newTodo) {

    var idx = todos.findIndex(function (todo) {
        return todo.id === todoId;
    });

    if (idx === -1) return todos;

    var newTodos = [...todos];
    newTodos[idx] = newTodo;
    return newTodos;
}


function getId(todos) {

    if (todos.length === 0) return 1;

    return todos[todos.length - 1].id + 1;
}

function getTodo(todos, todoId) {

    return todos.find(function (todo) {
        return todo.id === todoId;
    });
}

export default {
    createTodo,
    deleteTodo,
    editTodo,
    getTodo
};