import React, {Component} from 'react';
import './style.css';
import CCCLogo from '../../assets/codecoursecamp-logo.png';

class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <img className="desc-image" src={CCCLogo}/>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="desc-text">
              <div className="text-content">Apa itu CCC?</div>
              <div className="subtext-content">Code Course Camp adalah kursus yang dibuat oleh Code Margonda.
                Kursus ini diperuntukkan untuk kamu yang ingin membuat aplikasi sendiri sesuai dengan kebutuhan kamu.
              CCC terbagi menjadi tiga kelas yaitu basic, intermediate, dan advanced yang masing-masing terdiri dari 12 pertemuan.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
