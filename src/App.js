import React from 'react';

import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import todos_helper from './utils/Todos';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
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

  render() {
    var { todos } = this.state;
    return (
      <div className="App">
        <Header title="My Todo App" />
        <TodoForm createTodo={this.createTodo} />
        <TodoList deleteTodo={this.deleteTodo} todos={todos} />
      </div>
    );
  }
}

export default App;
