import React, { Component } from 'react';
import CheckBox from './CheckBox';
import Task from './Task';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{ id: 1, details: 'Cook Food', completed: false },
				{ id: 2, details: 'Go for a run', completed: false },
				{ id: 3, details: 'Clean up Kitchen', completed: false },
				{ id: 4, details: 'Watch TV', completed: false },
				{ id: 5, details: 'Go to the movie', completed: false },
				{ id: 6, details: 'Mow the lawn', completed: false },
				{ id: 7, details: 'Wash the car', completed: false },
				{ id: 8, details: 'Iron clothes', completed: false },
				{ id: 9, details: 'Go hiking', completed: false },
				{ id: 10, details: 'Call up the doctor', completed: false },
				{ id: 11, details: 'Call up home', completed: false },
				{ id: 12, details: 'Call up friends', completed: false },
				{ id: 13, details: 'Send Invitations', completed: false },
			],
			limit: 5,
      text: 'Show More',
      addTaskText:''
		}
		this.onClickHandler = this.onClickHandler.bind(this);
		this.toggleCompleted = this.toggleCompleted.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    let text = e.target.value;
    this.setState({ addTaskText:text });
  }

	handleKeyPress(e) {
		let details = e.target.value;
		if (e.key === 'Enter') {
			this.setState((prevState) => {
				let tasks = prevState.tasks;

				//add 1 to the id of each existing task
				for (let task of tasks) {
					task.id++;
				}

				let task = { id: 1, details, completed: false };
        tasks.unshift(task);
				return ({ tasks, addTaskText: '' });
			})
		}
	}

	toggleCompleted(id) {
		return () => (
			this.setState((prevState) => {
				let tasks = prevState.tasks;
				for (let task of tasks) {
					if (task.id === id) task.completed = !task.completed;
				}
				return ({ tasks });
			})
		)
	}

	onClickHandler() {
		const { tasks, limit, text } = this.state;

		if (text === 'Show More' && tasks.length > limit) {
			if (limit + 5 >= tasks.length) {
				this.setState({ limit: limit + 5, text: 'Show Less' });
			} else {
				this.setState({ limit: limit + 5 });
			}
		}
		else if (limit >= 10) {
			if (limit - 5 === 5) {
				this.setState({ limit: limit - 5, text: 'Show More' });
			} else {
				this.setState({ limit: limit - 5 });
			}
		}
		else if (tasks.length < 5) alert('There are no more tasks to display');

	}

	render() {
		const { tasks, limit, text } = this.state;

		return (
			<div className='container'>
				<h2>tasks</h2>
				<div className="btnDiv">
					<button className='btn' onClick={this.onClickHandler}>{text}</button>
					<Task handleKeyPress={this.handleKeyPress} addTaskText={this.state.addTaskText} handleChange={this.handleChange}/>
				</div>
				<div className="tasks">
					<ul>
						{tasks.map(task => (
							(task.id <= limit) &&
							<li key={task.id}
								className={task.completed ? 'completed' : 'task'}
							>
								{task.details}
								<CheckBox
									completed={task.completed}
									toggleCompleted={this.toggleCompleted}
									task={task}
								/>
							</li>)
						)
						}
					</ul>
				</div>

			</div>
		);
	}
}

export default App;
