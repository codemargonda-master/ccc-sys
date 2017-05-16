import React, {Component} from 'react';
import './style.css';

class Syllabus extends Component {
  render() {
    return (
      <div className="syllabus">
        <div className="syllabus-title">Download silabus lengkap dari program CCC</div>
        <form>
          <div className="row syllabus-content">
            <div className="col-md-8 col-sm-8 col-xs-8">
              <input className="syllabus-input" type="text" name="email" placeholder="Email"/>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
              <input className="syllabus-button" type="submit" value="Download"/>
            </div>
          </div>
        </form>
        <div className="syllabus-subtitle">Dengan mengklik "Download", kamu setuju dengan peraturan CCC.</div>
      </div>
    );
  }
}

export default Syllabus;
