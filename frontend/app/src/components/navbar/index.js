import React, {Component} from 'react';
import logo from '../../assets/ccc-logo.png';
import './style.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
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
                <NavLink className="text-black" exact activeClassName='active' to='/'>BERANDA</NavLink>
              </li>
              <li>
                <a className="text-black" href="#galeri">GALERI</a>
              </li>
              <li>
                <NavLink className="text-black" to="#program">PROGRAM</NavLink>
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

export default Navbar;
