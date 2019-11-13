import {ADD_TASK} from '../actions/index';

export default function reducerAddTask (state={}, action) {
  switch(action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        tasks: [action.payload, ...state.tasks]
      });
    default:
      return state;
  }
}