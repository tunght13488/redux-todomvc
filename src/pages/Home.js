import React from 'react';
import Footer from '../components/Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

const Home = () => {
  return (
    <div>
      <VisibleTodoList/>
      <Footer/>
    </div>
  );
};

export default Home;
