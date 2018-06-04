import React from 'react';
import { VisibilityFilters } from '../actions';
import Footer from '../components/Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

const Active = () => {
  return (
    <div>
      <VisibleTodoList filter={VisibilityFilters.SHOW_ACTIVE}/>
      <Footer/>
    </div>
  );
};

export default Active;
