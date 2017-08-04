import React, {Component} from 'react';
import './style.css';
import ImageHeader from '../../assets/header.png';
import {NavLink} from 'react-router-dom';
import Scroll from 'react-scroll';

var Link = Scroll.Link;
var scroller = Scroll.scroller;

class Header extends Component {
  handleClick(){
    window.location.href='/dashboard';
  }

  scrollTo() {
    scroller.scrollTo('description', {duration: 1000, spy: true, smooth: true, offset: -50})
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
              <button className="header-button button-info" onClick={this.scrollTo}>Lebih Lanjut</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
