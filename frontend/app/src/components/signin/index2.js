import React, {Component} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import Navbar from '../navbar/index3';

class BasicForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.target.classList.add('active');
    this.setState({
      [e.target.name]: e.target.value
    });

    this.showInputError(e.target.name)

  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('component state', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');

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
    }
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add('active');

      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
    const isPassword = refName.indexOf('password') !== -1;
    const isPasswordConfirm = refName === 'passwordConfirm';

    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
      } else {
        this.refs.passwordConfirm.setCustomValidity('');
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`;
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} should be longer than 4 chars`;
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Passwords do not match';
      }
      return false;
    }

    error.textContent = '';
    return true;
  }

  render() {
    return (
      <form novalidate>
        <div className="form-group">
          <label id="usernameLabel">Email</label>
          <input id="input_email" className="form-control" type="email" name="username" ref="username" value={this.state.username} onChange={this.handleChange} required/>
          <div className="error" id="usernameError"/>
        </div>
        <div className="form-group">
          <label id="passwordLabel">Password</label>
          <input id="input_password" className="form-control" type="password" name="password" ref="password" value={this.state.password} onChange={this.handleChange} pattern=".{5,}" required/>
          <div className="error" id="passwordError"/>
        </div>
        <button className="btn btn-primary" onClick={this.handleSubmit}>submit</button>
      </form>
    );
  }
}

class Signin extends Component {

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
              <BasicForm/>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
