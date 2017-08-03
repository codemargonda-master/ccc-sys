// Taken and adapted from Modus Create - ReactJS Form Validation Approaches http://moduscreate.com/reactjs-form-validation-approaches/
// Original code: https://codepen.io/jmalfatto/pen/YGjmaJ

import React, {Component} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import Navbar from '../navbar/index3';
import {FormWithConstraints, FieldFeedback, Bootstrap4} from 'react-form-with-constraints';
const {FieldFeedbacks, FormGroup, FormControlLabel, FormControlInput} = Bootstrap4;

class Form extends FormWithConstraints {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordConfirm: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.currentTarget;

    this.setState({
      [target.name]: target.value
    });

    super.handleChange(e);
  }

  handleSubmit(e) {
    super.handleSubmit(e);

    console.log('state:', JSON.stringify(this.state));

    if (!this.isValid()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <FormGroup for="username">
          <FormControlLabel htmlFor="username">Username</FormControlLabel>
          <FormControlInput type="email" id="username" name="username" value={this.state.username} onChange={this.handleChange} required/>
          <FieldFeedbacks for="username">
            <FieldFeedback when="*"/>
          </FieldFeedbacks>
        </FormGroup>

        <FormGroup for="password">
          <FormControlLabel htmlFor="password">Password</FormControlLabel>
          <FormControlInput type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} pattern=".{5,}" required/>
          <FieldFeedbacks for="password" show="all">
            <FieldFeedback when="valueMissing"/>
            <FieldFeedback when="patternMismatch">Should be at least 5 characters long</FieldFeedback>

          </FieldFeedbacks>
        </FormGroup>

        <FormGroup for="passwordConfirm">
          <FormControlLabel htmlFor="password-confirm">Confirm Password</FormControlLabel>
          <FormControlInput type="password" id="password-confirm" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange} required/>
          <FieldFeedbacks for="passwordConfirm">
            <FieldFeedback when="*"/>
            <FieldFeedback when={value => value !== this.state.password}>Not the same password</FieldFeedback>
          </FieldFeedbacks>
        </FormGroup>

        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

class Auth extends Component {

  render() {
    return (
      <div className="login">
        <Navbar/>
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
              <Form/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
