import React from 'react';

const CheckBox = ({ task, completed, toggleCompleted }) => {
	return (
		<button
			onClick={toggleCompleted(task.id)}
		>
			{completed ? 'done' : ''}
		</button>
	)

}

export default CheckBox;