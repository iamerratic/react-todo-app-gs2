import React from 'react';

import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoEdit from './components/TodoEdit';
import TodoList from './components/TodoList';
import todos_helper from './utils/Todos';

var CREATEDATA = [
  { name: 'title', type: 'text', label: 'Title' },
  { name: 'description', type: 'text', label: 'Description' },
  { name: 'time', type: 'text', label: 'Time' }
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isEdit: false,
      id: null
    };

    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  createTodo(newTodo) {
    this.setState({
      todos: todos_helper.createTodo(this.state.todos, newTodo)
    });
  }

  deleteTodo(todoId) {
    this.setState({
      todos: todos_helper.deleteTodo(this.state.todos, todoId)
    });
  }

  editTodo(newTodo) {
    var { todos, id } = this.state;
    this.setState({
      todos: todos_helper.editTodo(todos, id, newTodo),
      isEdit: false
    });
  }

  toggleEdit(todoId) {
    if (!todoId) {
      this.setState({
        isEdit: false
      });
    }
    else {
      this.setState({
        isEdit: true,
        id: todoId
      })
    }
  }

  render() {

    var { todos, isEdit, id } = this.state;
    return (
      <div className="App">
        <Header title="My Todo App" />
        {isEdit ? (
          <TodoEdit editTodo={this.editTodo} input_meta={CREATEDATA} todo={todos_helper.getTodo(todos, id)} />
        ) : (
            <TodoForm input_meta={CREATEDATA} createTodo={this.createTodo} />
          )}
        <TodoList deleteTodo={this.deleteTodo} todos={todos} toggleEdit={this.toggleEdit} />
      </div>
    );
  }
}

export default App;
