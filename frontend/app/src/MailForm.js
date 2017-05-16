import React, {Component} from 'react';
import './App.css';

class MailForm extends Component {
  render() {
    return (
      <div className="col-md-5 col-sm-6 col-xs-12">
        <div className="footer-text">Dapatkan berita terbaru & event yang akan datang</div>
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-8">
            <input className="footer-input" type="text" name="email" placeholder="Email"/>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="footer-button">Daftar</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MailForm;
