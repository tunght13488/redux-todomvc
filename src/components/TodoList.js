import PropTypes from 'prop-types';
import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoToggle, onTodoDelete, onTodoToggleAll, onTodoEdit, onTodoUpdate}) => {
  let toggleAll;
  // This section should be hidden by default and shown when there are todos
  return todos.length ? (
    <section className="main">
      <input ref={node => {toggleAll = node;}} id="toggle-all" className="toggle-all" type="checkbox"
        onChange={() => onTodoToggleAll(toggleAll.checked)}/>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} onToggle={(completed) => onTodoToggle(index, completed)}
            onDelete={() => onTodoDelete(index)} onEdit={() => onTodoEdit(index)}
            onUpdate={(text) => onTodoUpdate(index, text)}/>
        ))}
      </ul>
    </section>
  ) : (null);
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      editing: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoToggle: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
  onTodoToggleAll: PropTypes.func.isRequired,
  onTodoUpdate: PropTypes.func.isRequired,
};

export default TodoList;
