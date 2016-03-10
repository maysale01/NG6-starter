import {List} from 'immutable';

const INITIAL_STATE = List();

export default function items(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_ITEM':
    return state.push(action.item);
  case 'REMOVE_ITEM':
    return state.delete(findIndexById(state, action.id));
  default:
    return state
  }
}

function findIndexById(state, id) {
  return state.findIndex(item => item.id === id);
}