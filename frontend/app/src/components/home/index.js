import React, {Component} from 'react';
import './style.css';
import Header from '../header/index';
import Description from '../description/index';
import Classes from '../classes/index';
import Trainer from '../trainer/index';
import Level from '../level/index';
import Schedule from '../schedule/index';
import Register from '../register/index';
import Syllabus from '../syllabus/index';
import Testimony from '../testimony/index';
import Footer from '../footer/index';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <Classes />
        <Level />
        <Trainer />
        <Schedule />
        <Register />
        <Syllabus />
        <Testimony />
        <Footer />
      </div>
    );
  }
}

export default Home;
