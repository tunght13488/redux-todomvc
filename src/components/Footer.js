import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { clearCompleted, VisibilityFilters } from '../actions';
import FilterLink from '../containers/FilterLink';

const _Footer = ({todoCount, completedCount, onClearCompleted}) => {
  // This footer should hidden by default and shown when there are todos
  return todoCount ? (
    <footer className="footer">
      {/* This should be `0 items left` by default */}
      <span className="todo-count"><strong>{todoCount}</strong> {todoCount <= 1 ? 'item' : 'items'} left</span>
      {/* Remove this if you don't implement routing */}
      <ul className="filters">
        <li>
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        </li>
        <li>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        </li>
        <li>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        </li>
      </ul>
      {/* Hidden if no completed items are left ↓ */}
      {completedCount ? <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button> : null}
    </footer>
  ) : (null);
};

_Footer.propTypes = {
  todoCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    todoCount: state.todos.length,
    completedCount: state.todos.filter(todo => todo.completed).length,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearCompleted: () => dispatch(clearCompleted()),
  };
};

const Footer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Footer);

export default Footer;
