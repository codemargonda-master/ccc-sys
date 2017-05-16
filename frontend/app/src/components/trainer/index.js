import React, {Component} from 'react';
import './style.css';
import Trainer1 from '../../assets/consultant1.jpg';
import Trainer2 from '../../assets/consultant2.jpg';
import Trainer3 from '../../assets/consultant3.jpg';
import Trainer4 from '../../assets/consultant4.jpg';

const trainer = [
  {
    img_url: Trainer1,
    name: "Gungde Aditya",
    job: "Android Developer"
  }, {
    img_url: Trainer2,
    name: "David Cornelius",
    job: "Android Developer"
  }, {
    img_url: Trainer3,
    name: "Fuad Aji Pratomo",
    job: "Web Developer"
  }, {
    img_url: Trainer4,
    name: "Jefri Yushendri",
    job: "Web Developer"
  }
];

class Trainer extends Component {
  render() {
    return (
      <div className="trainer">
        <div className="trainer-title">Pengajar</div>
        <div className="row">

          {trainer.map(function(tr, index) {
            return (
              <div key={index} className="col-md-3 col-sm-6 col-xs-12">
                <img className="trainer-image" src={tr.img_url}/>
                <div className="trainer-text">{tr.name}</div>
                <div className="trainer-subtext">{tr.job}</div>
              </div>
            );
          })}

        </div>
      </div>
    );
  }
}

export default Trainer;
