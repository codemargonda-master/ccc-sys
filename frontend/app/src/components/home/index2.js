import React, {Component} from 'react';
import './style.css';
import Navbar from '../navbar/index2';
import Header from '../header/index2';
import Description from '../description/index';
import Classes from '../classes/index';
import Trainer from '../trainer/index';
import Level from '../level/index';
import Galeri from '../gallery/index';
import Schedule from '../schedule/index';
import Register from '../register/index';
import Syllabus from '../syllabus/index';
import Testimony from '../testimony/index';
import Footer from '../footer/index';
import Scroll from 'react-scroll';

var Link = Scroll.Link;
var Element = Scroll.Element;

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Element name="top">
          <Navbar/>
        </Element>
        <Header/>
        <Element name="description">
          <Description/>
        </Element>
        <Element name="program">
          <Classes/>
        </Element>
        <Level/>
        <Trainer/>
        <Element name="galeri">
          <Galeri/>
        </Element>
        <Schedule/>
        <Register/>
        <Syllabus/>
        <Testimony/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
