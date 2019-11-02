import React from 'react';

const Task = (props) => {
	return (
		<input
			type='text'
			className='addTask'
			onKeyPress={(e) => props.handleKeyPress(e)}
			placeholder='Add Task'
			maxLength='30'
		/>
	)
}

export default Task;