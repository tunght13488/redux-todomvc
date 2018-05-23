import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Todo = ({text, completed, editing, onToggle, onDelete, onEdit, onUpdate}) => {
  let toggleInput;
  let textInput;
  return (
    <li className={classNames({completed, editing})}>
      <div className="view">
        <input ref={node => toggleInput = node} className="toggle" type="checkbox" checked={completed}
          onChange={() => onToggle(toggleInput.checked)}/>
        <label onDoubleClick={() => {
          textInput.focus();
          onEdit();
        }}>{text}</label>
        <button className="destroy" onClick={onDelete}/>
      </div>
      <input ref={node => {textInput = node;}} className="edit" defaultValue={text}
        onKeyPress={e => {e.key === 'Enter' && onUpdate(textInput.value);}} onBlur={() => onUpdate(textInput.value)}/>
    </li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Todo;
