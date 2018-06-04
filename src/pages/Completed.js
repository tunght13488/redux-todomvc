import React from 'react';
import { VisibilityFilters } from '../actions';
import Footer from '../components/Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

const Completed = () => {
  return (
    <div>
      <VisibleTodoList filter={VisibilityFilters.SHOW_COMPLETED}/>
      <Footer/>
    </div>
  );
};

export default Completed;
