import React, {Component} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import AlertContainer from '../../../node_modules/react-alert/dist/alert-container';
import Navbar from '../navbar/index';

class Auth extends Component {
  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'light',
    time: 5000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Registrasi berhasil!', {
      time: 2000,
      type: 'success',
      icon: <img src="path/to/some/img/32x32.png"/>
    })
  }

  handleClick() {
    var name = $('#input_name').val();
    var email = $('#input_email').val();
    var password = $('#input_password').val();

    axios.post('http://localhost:9000/auth', {
      name: name,
      email: email,
      password: password
    }).then(function(response) {
      if (response.status = 200) {
        console.log(response);
        alert("Registrasi berhasil!");
        window.location.href = '/signin';
      } else if (response.status = 401) {
        console.log(response);
        alert("Email sudah terdaftar!");
      } else {
        console.log(response);
      }
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="login">
        <Navbar/>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions}/>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="signup-banner">
              <div className="login-banner-title">Gabung Sekarang di CCC!</div>
              <div className="login-banner-subtitle">Tingkatkan skillmu di Code Course Camp. Perbanyak peluang untuk mengejar cita-citamu!</div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">

            <div className="login-form">
              <div className="login-form-title">Buat Akun</div>
              <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-7">
                  <div className="login-form-subtitle">Sudah punya akun?</div>
                </div>
                <div className="col-md-7 col-sm-7 col-xs-5">
                  <NavLink className="login-form-subtitle" id="login-text" to="/signin">Masuk</NavLink>
                </div>
              </div>
              <form method="post" action="" id="signup-form">
                <div className="login-form-label">Nama lengkap</div>
                <input id="input_name" className="login-form-input" type="text" name="name" placeholder="Nama Lengkap"></input>
                <div className="login-form-label">Email</div>
                <input id="input_email" className="login-form-input" type="email" name="email" placeholder="Email"></input>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="login-form-label">Password</div>
                    <input id="input_password" className="login-form-input" type="password" name="password"></input>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="login-form-label">Confirm password</div>
                    <input className="login-form-input" type="password"></input>
                  </div>
                </div>
                <button type="button" className="login-button" onClick={this.handleClick}>Daftar</button>
              </form>
              <div className="error-content">
                <ul className="err-area"></ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
