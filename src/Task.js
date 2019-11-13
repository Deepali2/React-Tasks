import React from 'react';

const Task = (props) => {
	return (
		<input
			type='text'
			className='addTask'
      onKeyPress={(e) => props.handleKeyPress(e)}
      onChange={(e) => props.handleChange(e)}
			placeholder='Add Task'
      maxLength='30'
      value={props.addTaskText}
		/>
	)
}

export default Task;