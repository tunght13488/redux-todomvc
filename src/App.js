import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import './App.css';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import Active from './pages/Active';
import Completed from './pages/Completed';
import Home from './pages/Home';
import todoApp from './reducers';

const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    todo: todoApp,
    router: routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware),
);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo/>
        </header>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/active" component={Active}/>
          <Route path="/completed" component={Completed}/>
        </Switch>
      </section>
    </ConnectedRouter>
  </Provider>
);

export default App;
