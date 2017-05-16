import React, {Component} from 'react';
import './style.css';

class Register extends Component {
  render() {
    return (
      <div className="register paralax">
        <div className="register-title">Tingkatkan Skillmu Sekarang!</div>
        <div className="register-subtitle">Kami membuka kelas baru setiap bulannya. Lulusan Code Course Camp memiliki peluang lebih tinggi untuk mendapatkan pekerjaan sebagai developer dikarenakan lulusan kamu dijamin memiliki kemampuan yang dicari oleh para industri teknologi di Indonesia.</div>
        <button className="register-button">Daftar Sekarang</button>
      </div>
    );
  }
}

export default Register;
