import React, {Component} from 'react';
import logo from '../../assets/ccc-logo.png';
import './style.css';
import {NavLink} from 'react-router-dom';
import Scroll from 'react-scroll';

var Link = Scroll.Link;

class Navbar extends Component {

  render() {
    return (
      <div className="navbar navbar-fixed-top">

        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="navbar-header">
              <a href="App"><img className="navbar-logo" src={logo}/></a>
            </div>
          </div>

          <div className="col-md-8 col-sm-8 col-xs-8">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link activeClassName="active" className="text-black" to="top" spy={true} smooth={true} duration={1000}>BERANDA</Link>
                </li>
                <li>
                  <Link activeClassName="active" className="text-black" to="program" spy={true} smooth={true} offset={-50} duration={1000}>PROGRAM</Link>
                </li>
                <li>
                  <Link activeClassName="active" className="text-black" to="galeri" spy={true} smooth={true} offset={-25} duration={1000}>GALERI</Link>
                </li>
                <li>
                  <NavLink className="text-black" exact activeClassName='active' to='/auth'>DAFTAR</NavLink>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Navbar;
