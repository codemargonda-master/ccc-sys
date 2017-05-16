import React, {Component} from 'react';
import './style.css';
import AndroidLogo from '../../assets/android.png';
import WebLogo from '../../assets/html5.png';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col-md-3">
            <ul className="dashboard-menu">
              <li className="dashboard-li">
                <a href="#home">HOME</a>
              </li>
              <li className="dashboard-li">
                <a href="#news">PROFILE</a>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <div className="dashboard-content">
              <div className="dashboard-title">Kelas yang tersedia</div>
              <div className="row">
                <div className="col-md-6">
                  <div className="dashboard-android-content">
                    <div className="dashboard-android-logo">
                      <img className="dashboard-image-logo" src={AndroidLogo}/>
                    </div>
                    <div className="dashboard-text-title">Android Development</div>
                    <div className="dashboard-text-subtitle">Mempelajari cara membuat aplikasi android dengan menggunakan android studio.</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dashboard-web-logo">
                    <img className="dashboard-image-logo" src={WebLogo}/>
                  </div>
                  <div className="dashboard-web-content">
                    <div className="dashboard-text-title">Web Development</div>
                    <div className="dashboard-text-subtitle">Mempelajari cara membuat website dengan teknologi laravel.</div>
                  </div>
                </div>
              </div>
              <div className="dashboard-subtitle">Kelas yang sedang diikuti</div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th id="schedule-th">Kelas</th>
                    <th id="schedule-th">Batch</th>
                    <th id="schedule-th">Status</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
