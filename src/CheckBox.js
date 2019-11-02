import React from 'react';

const CheckBox = ({task, completed, toggleCompleted}) => {
	return(
		<button
			onClick={toggleCompleted(task.id)}
		>
		
		</button>
	)

}

export default CheckBox;