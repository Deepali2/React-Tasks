import React from 'react';
import { connect } from 'react-redux';
import addTask from './actions/index'; 

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

const mapStateToProps = state => {
  const tasks = state.tasks;
  return tasks;
}

export default connect(mapStateToProps, {addTask})(Task);

// export default Task;