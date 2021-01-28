import React from 'react'
import './App.css';
//import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from './container/Signin'
import Home from './container/Home'
import Signup from './container/Signup'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
