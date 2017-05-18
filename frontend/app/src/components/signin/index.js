import React, {Component} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import Navbar from '../navbar/index';

class Signin extends Component {
  handleClick() {

    var email = $('#input_email').val();
    var password = $('#input_password').val();

    axios.post('http://localhost:9000/signin', {
      email: email,
      password: password
    }).then(function(response) {
      if (response.status = 200) {
        console.log(response);
        alert("Masuk ke akun berhasil!");
        window.location.href = '/dashboard';
      } else {
        console.log(response);
        alert("Data tidak cocok!");
      }

    }).catch(function(error) {
      console.log(error);
    });

    // $.ajax({
    //
    //   url: "localhost:9000/signin",
    //   type: "post",
    //   data: $("#login-form").serialize(),
    //   success: function(res) {
    //
    //     location.href = "/dashboard";
    //     return false;
    //   },
    //   error: function(xhr, status, error) {
    //     var i_name = $('#input_name').val();
    //     var i_email = $('#input_email').val();
    //     var i_pass = $('#input_password').val();
    //
    //     if (i_name == "" || i_email == "" || i_pass == "") {
    //       console.log(xhr.responseText);
    //       var err = '';
    //       $.each(JSON.parse(xhr.responseText), function(i, item) {
    //
    //         err += '<li>' + item.msg + '</li>';
    //       });
    //       $(".err-area").html(err);
    //       return false;
    //     }
    //   }
    //
    // });
  }

  render() {
    return (
      <div className="login">
        <Navbar/>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="login-banner">
              <div className="login-banner-title">Gabung Sekarang di CCC!</div>
              <div className="login-banner-subtitle">Tingkatkan skillmu di Code Course Camp. Perbanyak peluang untuk mengejar cita-citamu!</div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">

            <div className="login-form">
              <div className="login-form-title">Masuk Akun</div>
              <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-7">
                  <div className="login-form-subtitle">Belum punya akun?</div>
                </div>
                <div className="col-md-7 col-sm-7 col-xs-5">
                  <NavLink className="login-form-subtitle" id="login-text" to="/auth">Daftar</NavLink>
                </div>
              </div>

              <form method="post" action="" id="login-form">
                <div className="login-form-label">Email</div>
                <input id="input_email" className="login-form-input" type="text" name="email" placeholder="Email"></input>
                <div className="login-form-label">Password</div>
                <input id="input_password" className="login-form-input" type="password" name="password" placeholder="Password"></input>
                <button type="button" className="login-button" onClick={this.handleClick}>Masuk</button>
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

export default Signin;
