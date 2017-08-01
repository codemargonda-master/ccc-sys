import React, {Component} from 'react';
import './style.css';
import Navbar from '../navbar/index';
import Home from '../home/index';
import Home2 from '../home/index2';
import Auth from '../auth/index2';
import Signin from '../signin/index2';
import Dashboard from '../dashboard/index';
import Registration from '../course-register/index';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home2}/>
            <Route exact path='/auth' component={Auth}/>
            <Route exact path='/signin' component={Signin}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/registration' component={Registration}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
