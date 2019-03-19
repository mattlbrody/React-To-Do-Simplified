import React, { Component } from 'react';
import ToDoList from './ToDoList';
import SearchBar from './SearchBar';

class App extends Component {
  state = { items: [
      {
        id: 1, item: 'code a new react app'
      },
      {
        id: 2, item: 'solve another algorithm'
      }
    ],
    inputVal: ''
  }

  formSubmit = (e) => {
    e.preventDefault();
    // set a random id to setState later
    var newId = Math.random();
    // retrieve input data from search bar component
    var newItem = this.state.inputVal;
    // set state with id and input data
    // reset value of input in Search Bar component to be ''
    this.setState({ items: [...this.state.items, {id: newId, item: newItem}], inputVal: '' })
  }

  // retrieve input data from search bar component
  updateVal = (value) => {
    this.setState({ inputVal: value })
  }

  render() {
    return (
      <div className="Container">
        <div className="row">
          <div className="col s4 offset-s4">
            <h1>To Do List</h1>
            <SearchBar 
              onFormSubmit={this.formSubmit}
              updateVal={this.updateVal}
              inputVal={this.state.inputVal}
            />
            <ToDoList 
              data={this.state.items}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
