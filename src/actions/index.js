export const ADD_TASK = 'add_task';

export default function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task
  };
}
