import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({dispatch}) => {
  let input;
  return (
    <input className="new-todo" placeholder="What needs to be done?" autoFocus
      ref={node => {input = node;}}
      onKeyPress={e => {
        if (e.key === 'Enter') {
          dispatch(addTodo(input.value));
          input.value = '';
        }
      }}/>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
