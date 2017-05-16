import React, {Component} from 'react';
import './style.css';
import Navbar from '../navbar/index';
import Home from '../home/index';
import Auth from '../auth/index';
import Signin from '../signin/index';
import Dashboard from '../dashboard/index';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/auth' component={Auth}/>
            <Route exact path='/signin' component={Signin}/>
            <Route exact path='/dashboard' component={Dashboard}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
