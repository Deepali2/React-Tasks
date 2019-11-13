export const ADD_TASK = 'add_task';

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task
  }
}