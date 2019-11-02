import React from 'react';
import './CheckBox.css';

const CheckBox = ({ task, completed, toggleCompleted }) => {
	return (
		<button
			onClick={toggleCompleted(task.id)}
			className={completed ? 'btnCompleted' : 'btnNotCompleted'}
		>
			{completed ? <i className="far fa-check-square"></i> : ''}
		</button>
	)

}

export default CheckBox;