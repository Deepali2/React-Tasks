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
				{ id: 11, details: 'Call up home', completed: false },
        { id: 12, details: 'Call up friends', completed: true },
        { id: 13, details: 'Send Invitations', completed: false },
      ],
      limit: 5,
      text: 'Show More',
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
		const { tasks, limit, text } = this.state;
    if (text === 'Show More' && tasks.length > limit) {
			if (limit + 5 >= tasks.length) {
        this.setState({limit: limit + 5, text: 'Show Less'});
			} else {
				this.setState({limit: limit + 5});
			}
		}
		else if (limit >= 10) {
			if (limit - 5 === 5) {
        this.setState({limit: limit - 5, text: 'Show More'});
			} else {
				this.setState({limit: limit - 5});
			}
		}
		else if (tasks.length < 5) alert('There are no more tasks to display');
    
  }
  render() {
    const { tasks, limit, text, onClickHandler } = this.state;
    return (
      <div>
        <ul className="tasks">
					{tasks.map((task, index) => 
					  {
              if (task.id <= limit) {
              return (<li>{task.details}</li>)
              }
            })
          }
        </ul>
				<div className="btnDiv">
          <button className='btn' onClick={this.onClickHandler}>{text}</button>
				</div>
      </div>
    );
  }
}

export default App;
