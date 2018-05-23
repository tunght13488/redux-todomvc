import { combineReducers } from 'redux';
import {
  ADD_TODO,
  CLEAR_COMPLETED,
  DELETE_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_ALL,
  TOGGLE_EDITING,
  TOGGLE_TODO,
  UPDATE_TODO,
  VisibilityFilters,
} from './actions';

const {SHOW_ALL} = VisibilityFilters;

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          editing: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return {...todo, completed: action.completed};
        }
        return todo;
      });
    case TOGGLE_ALL:
      return state.map(todo => {
        return {...todo, completed: action.completed};
      });
    case TOGGLE_EDITING:
      return state.map((todo, index) => {
        if (index === action.index) {
          return {...todo, editing: true};
        }
        return todo;
      });
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    case DELETE_TODO:
      return state.filter((todo, index) => index !== action.index);
    case UPDATE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return {...todo, editing: false, text: action.text};
        }
        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
