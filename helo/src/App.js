import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/form/Form'
import Nav from './components/nav/Nav'
import Post from './components/post/Post'
import Auth from './components/auth/Auth'
import {HashRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/' component={Auth} exact/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/post/:postid' component={Post}/>
          <Route path='/new' component={Form}/>
      </Switch>
      </HashRouter>
      </div>
    );
  }
}

export default App;
