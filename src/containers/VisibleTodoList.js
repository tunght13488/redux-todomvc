import { connect } from 'react-redux';
import { deleteTodo, toggleAll, toggleEditing, toggleTodo, updateTodo, VisibilityFilters } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoToggle: (id, completed) => {
      dispatch(toggleTodo(id, completed));
    },
    onTodoDelete: id => {
      dispatch(deleteTodo(id));
    },
    onTodoToggleAll: completed => {
      dispatch(toggleAll(completed));
    },
    onTodoEdit: id => {
      dispatch(toggleEditing(id));
    },
    onTodoUpdate: (index, text) => {
      dispatch(updateTodo(index, text));
    },
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
