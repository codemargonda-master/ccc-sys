import React, {Component} from 'react';
import './style.css';
import Testimony1 from '../../assets/consultant1.jpg';
import Testimony2 from '../../assets/consultant2.jpg';

const testimony = [
  {
    img_url: Testimony1,
    name: "Gungde Aditya",
    text: "Saya merasa sangat terbantu dengan program CCC ini. Saya menjadi mengerti bagaimana membuat aplikasi android yang baik."
  }, {
    img_url: Testimony2,
    name: "Alfonsius Krisnanda",
    text: "Saya merasa sangat terbantu dengan program CCC ini. Saya menjadi mengerti bagaimana membuat aplikasi android yang baik."
  }
];

class Testimony extends Component {
  render() {
    return (
      <div className="testimony">
        <div className="testimony-title">Testimoni</div>
        <div className="row">

          {testimony.map(function(ts, index) {
            return (
              <div key={index} className="col-md-6 col-sm-6 col-xs-12">
                <div className="testimony-content">
                  <img className="testimony-image" src={ts.img_url}/>
                  <div className="testimony-border">
                    <div className="testimony-name">{ts.name}</div>
                    <div className="testimony-text">{ts.text}</div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    );
  }
}

export default Testimony;
