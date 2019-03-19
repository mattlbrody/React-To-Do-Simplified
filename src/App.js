import React, { Component } from 'react';
import ToDoList from './ToDoList';

class App extends Component {
  state = { items: [
      {
        id: 1, item: 'code a new react app'
      },
      {
        id: 2, item: 'solve another algorithm'
      }
    ]}

  render() {
    return (
      <div className="App">
        <ToDoList 
          data={this.state.items}
        />
      </div>
    );
  }
}

export default App;
