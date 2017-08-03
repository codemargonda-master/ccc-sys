import React, {Component} from 'react';
import './style.css';
// import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';

class CourseRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: '',
      batch: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (this.showInputError(e.target.name)) {
      e.target.classList.add('active');
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('component state', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');

      var course = $('#input_course').val();
      var batch = $('#input_batch').val();

      axios.post('http://localhost:9000/regis', {
        course: course,
        batch: batch
      }).then(function(response) {
        if (response.status = 200) {
          console.log(response);
          alert("Registrasi berhasil!");
          window.location.href = '/dashboard';
        } else if (response.status = 401) {
          console.log(response);
          alert("Batch sudah terdaftar!");
        } else {
          console.log(response);
        }
      }).catch(function(error) {
        console.log(error);
      });
    }
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('select');
    let isFormValid = true;

    inputs.forEach(input => {

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
      <div className="course-register">
        <h3>Form Pendaftaran Kursus</h3>
        <form className="course-form">
          <div className="form-group">
            <label id="courseLabel">Kursus</label>
            <select id="input_course" className="form-control" type="text" name="course" ref="course" value={this.state.course} onChange={this.handleChange} required>
              <option value="select">Pilih</option>
              <option value="Android Development">Android Development</option>
              <option value="Web Development">Web Development</option>
            </select>
            <div className="error" id="courseError"/>
          </div>
          <div className="form-group">
            <label id="batchLabel">Batch</label>
            <select id="input_batch" className="form-control" type="text" name="batch" ref="batch" value={this.state.batch} onChange={this.handleChange} required>
              <option value="select">Pilih</option>
              <option value="Beginner (15 Juni 2017)">Beginner (15 Juni 2017)</option>
              <option value="Beginner (5 Juli 2017)">Beginner (5 Juli 2017)</option>
              <option value="Intermediate (27 Juli 2017)">Intermediate (27 Juli 2017)</option>
            </select>
            <div className="error" id="batchError"/>
          </div>
          <button className="btn btn-primary" onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
    );
  }
}

export default CourseRegister;
