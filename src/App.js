import React from 'react';
import './App.css';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

function App() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo/>
      </header>
      <VisibleTodoList/>
      <Footer/>
    </section>
  );
}

export default App;
