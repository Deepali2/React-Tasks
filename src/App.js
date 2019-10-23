import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, details: 'Cook Food', completed: true },
        { id: 2, details: 'Go for a run', completed: false },
        { id: 3, details: 'Clean up Kitchen', completed: false },
        { id: 4, details: 'Watch TV', completed: false },
        { id: 5, details: 'Go to the movie', completed: true },
        { id: 6, details: 'Mow the lawn', completed: true },
        { id: 7, details: 'Wash the car', completed: true },
        { id: 8, details: 'Iron clothes', completed: false },
        { id: 9, details: 'Go hiking', completed: true },
        { id: 10, details: 'Call up the doctor', completed: false },
      ]
    }
  }
  render() {
    const { tasks } = this.state;
    return (
      <ul className="App">
        {tasks.map((task, index) => <li>{task.details}</li>)}
      </ul>
    );
  }
}

export default App;
