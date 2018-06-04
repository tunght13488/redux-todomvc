import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearCompleted } from '../actions';

const _Footer = ({todoCount, completedCount, onClearCompleted}) => {
  // This footer should hidden by default and shown when there are todos
  return todoCount ? (
    <footer className="footer">
      {/* This should be `0 items left` by default */}
      <span className="todo-count"><strong>{todoCount}</strong> {todoCount <= 1 ? 'item' : 'items'} left</span>
      {/* Remove this if you don't implement routing */}
      <ul className="filters">
        <li>
          <NavLink exact to="/" activeClassName="selected">All</NavLink>
        </li>
        <li>
          <NavLink to="/active" activeClassName="selected">Active</NavLink>
        </li>
        <li>
          <NavLink to="/completed" activeClassName="selected">Completed</NavLink>
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

const mapStateToProps = ({todo: state}) => {
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
