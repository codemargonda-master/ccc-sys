import React, {Component} from 'react';
import './style.css';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';

class CourseRegister extends Component {
  handleClick() {
    var birthdate = $('#input_birthdate').val();
    var gender = $('#input_gender').val();
    var phone = $('#input_phone').val();
    var address = $('#input_address').val();
    var city = $('#input_city').val();
    var lasteducation = $('#input_edu').val();
    var course = $('#input_course').val();
    var batch = $('#input_batch').val();

    axios.post('http://localhost:9000/regis', {
      birthdate: birthdate,
      gender: gender,
      phone: phone,
      address: address,
      city: city,
      lasteducation: lasteducation,
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

  render() {
    return (
      <div className="course-register">
        <h3>Form Pendaftaran Kursus</h3>
        <form>
          <FormGroup className="course-form" controlId="input_birthdate">
            <ControlLabel>Tanggal Lahir</ControlLabel>
            <FormControl type="date"/>
          </FormGroup>
          <FormGroup className="course-form" controlId="input_gender">
            <ControlLabel>Jenis Kelamin</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">Pilih</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </FormControl>
          </FormGroup>
          <FormGroup className="course-form" controlId="input_phone">
            <ControlLabel>Nomor Telepon</ControlLabel>
            <FormControl type="text" placeholder="Enter text"/>
          </FormGroup>
          <FormGroup className="course-form" controlId="input_address">
            <ControlLabel>Alamat</ControlLabel>
            <FormControl type="text" placeholder="Enter text"/>
          </FormGroup>
          <FormGroup className="course-form" controlId="input_city">
            <ControlLabel>Kota</ControlLabel>
            <FormControl type="text" placeholder="Enter text"/>
          </FormGroup>
          <FormGroup className="course-form" controlId="input_edu">
            <ControlLabel>Pendidikan Terakhir</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">Pilih</option>
              <option value="SD">SD</option>
              <option value="SMP">SMP</option>
              <option value="SMA">SMA</option>
              <option value="S1">S1</option>
            </FormControl>
          </FormGroup>
          <FormGroup className="course-form" controlId="input_course">
            <ControlLabel>Kursus</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">Pilih</option>
              <option value="Android Development">Android Development</option>
              <option value="Web Development">Web Development</option>
            </FormControl>
          </FormGroup>
          <FormGroup className="course-form" controlId="input_batch">
            <ControlLabel>Batch</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">Pilih</option>
              <option value="Beginner (15 Juni 2017)">Beginner (15 Juni 2017)</option>
              <option value="Beginner (5 Juli 2017)">Beginner (5 Juli 2017)</option>
              <option value="Intermediate (27 Juli 2017)">Intermediate (27 Juli 2017)</option>
            </FormControl>
          </FormGroup>
        <button type="button" className="login-button" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CourseRegister;
