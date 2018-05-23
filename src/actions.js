/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const UPDATE_TODO = 'UPDATE_TODO';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/*
 * action creators
 */

export function addTodo(text) {
  return {type: ADD_TODO, text};
}

export function toggleTodo(index, completed) {
  return {type: TOGGLE_TODO, index, completed};
}

export function toggleEditing(index) {
  return {type: TOGGLE_EDITING, index};
}

export function toggleAll(completed) {
  return {type: TOGGLE_ALL, completed};
}

export function deleteTodo(index) {
  return {type: DELETE_TODO, index};
}

export function clearCompleted() {
  return {type: CLEAR_COMPLETED};
}

export function updateTodo(index, text) {
  return {type: UPDATE_TODO, index, text};
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter};
}
