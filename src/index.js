import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import Writer from './components/Writer';
import List from './components/List';
import Login from './components/Login';
import Regist from './components/Regist';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/section/Header';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/list" component={List}/>
        <Route path="/writer" component={Writer}/>
        <Route path="/login" component={Login}/>
        <Route path="/regist" component={Regist}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
