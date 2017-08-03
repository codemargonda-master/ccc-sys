import React, {Component} from 'react';
import './style.css';
import ImageHeader from '../../assets/header.png';
import {NavLink} from 'react-router-dom';
import Scroll from 'react-scroll';

var Link = Scroll.Link;

class Header extends Component {
  handleClick(){
    window.location.href='/dashboard';
  }

  render() {
    return (
      <div className="header">
        <img className="image" src={ImageHeader}/>
        <div className="header-caption">
          <div className="header-text">CODE COURSE CAMP</div>
          <div className="header-subtext">Semua orang bisa belajar coding!</div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <button className="header-button button-daftar" onClick={this.handleClick}>Daftar Sekarang</button>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <Link activeClassName="active" className="header-button button-info" to="description" spy={true} smooth={true} offset={-50} duration={1000}>Lebih Lanjut</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
