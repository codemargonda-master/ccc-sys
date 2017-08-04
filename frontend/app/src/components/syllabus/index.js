import React, {Component} from 'react';
import './style.css';
import axios from 'axios';
import $ from 'jquery';

class Syllabus extends Component {
  handleSubmit(){
    var email = $('#input_email').val();

    axios.post('http://localhost:9000/subscribe', {
      email: email
    }).then(function(response) {
      if (response.status = 200) {
        console.log(response);
        alert("Subscribe berhasil!");
        window.location.href = '/';
      } else {
        console.log(response);
        alert("Email sudah terdaftar!");
      }

    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="syllabus">
        <div className="syllabus-title">Subscribe dan dapatkan silabus lengkap dari program CCC</div>
        <form>
          <div className="row syllabus-content">
            <div className="col-md-8 col-sm-8 col-xs-8">
              <input id="input_email" className="syllabus-input" type="text" name="email" placeholder="Email"/>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
              <input className="syllabus-button" type="submit" value="Subscribe" onClick={this.handleSubmit}/>
            </div>
          </div>
        </form>
        <div className="syllabus-subtitle">Dengan mengklik "Subscribe", kamu setuju dengan peraturan CCC.</div>
      </div>
    );
  }
}

export default Syllabus;
