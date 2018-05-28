import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import todoApp from './reducers';

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
  <Provider store={store}>
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo/>
      </header>
      <VisibleTodoList/>
      <Footer/>
    </section>
  </Provider>
);

export default App;
