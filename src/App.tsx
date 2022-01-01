import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './user/pages/Users'
import Places from './places/pages/NewPlace'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

function App() {
  return <Router>
    <Switch>
<Route path="/" exact>
<Users/>
</Route>
<Route path="/places/new" exact>
<Places/>
</Route>
<Redirect to="/" />
</Switch>
  </Router>
}

export default App;
