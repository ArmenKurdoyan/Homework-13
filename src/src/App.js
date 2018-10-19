import React, { Component } from 'react';
import Input from './components/Input';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ``,
      count: 0,
      todos: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleCreate() {
    this.state.todos.push({
      todoTitle: this.state.title,
      todosStatus: false,
      todosEdit: false,
      todoKey: this.state.todos.length,
    });
    
    this.setState({
      count: this.state.todos.length,
    });
  }

  render() {
    
    const data = {
      ...this.state,
      handleCreate: this.handleCreate,
      handleChange: this.handleChange,
    }

    return (
      <div className="App">
        <form className="container">
          <Input data={data} />
          <Todos elements={data.todos} />
        </form>
      </div>  
    );
  }
}

export default App;