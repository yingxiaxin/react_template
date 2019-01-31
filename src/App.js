import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.scss';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
