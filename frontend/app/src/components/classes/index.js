import React, {Component} from 'react';
import './style.css';
import AndroidLogo from '../../assets/android.png';
import WebLogo from '../../assets/html5.png';

class Classes extends Component {
  render() {
    return (
      <div className="classes paralax" id="program">
        <div className="classes-title">Pilihan Kelas</div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="classes-content">
              <div className="android-logo">
                <img className="image-logo" src={AndroidLogo}/>
              </div>
              <div className="android-content">
                <div className="text-title">Android Development</div>
                <div className="text-subtitle">Mempelajari cara membuat aplikasi android dengan menggunakan android studio.</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="classes-content">
              <div className="web-logo">
                <img className="image-logo" src={WebLogo}/>
              </div>
              <div className="web-content">
                <div className="text-title">Web Development</div>
                <div className="text-subtitle">Mempelajari cara membuat website dengan teknologi laravel.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Classes;
