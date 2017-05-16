import React, {Component} from 'react';
import './style.css';
import ImageBeginner from '../../assets/beginner.png';
import ImageIntermediate from '../../assets/intermediate.jpg';
import ImageAdvanced from '../../assets/advanced.jpg';

const level = [
  {
    img_url: ImageBeginner,
    title: "Beginner",
    subtitle: "Cocok untuk kamu yang baru mulai belajar.",
    price_android: "Rp 1.000.000,-",
    price_web: "Rp 1.250.000,-"
  }, {
    img_url: ImageIntermediate,
    title: "Intermediate",
    subtitle: "Untuk kamu yang tertarik memperdalam skill.",
    price_android: "Rp 1.250.000,-",
    price_web: "Rp 1.500.000,-"
  }, {
    img_url: ImageAdvanced,
    title: "Advanced",
    subtitle: "Kamu akan terlibat dalam project sungguhan dalam kelas ini.",
    price_android: "Rp 1.750.000,-",
    price_web: "Rp 2.000.000,-"
  }
];

class Level extends Component {
  render() {
    return (
      <div className="level">
        <div className="level-title">Tingkatan</div>

        <div className="row">
          {level.map(function(lv, index) {
            return (
              <div key={index} className="col-md-4 col-sm-4 col-xs-12">
                <div className="level-content">
                  <img className="level-image" src={lv.img_url}/>
                  <div className="level-text">
                    <div className="level-text-head">{lv.title}</div>
                    <div className="level-text-desc">{lv.subtitle}</div>
                    <div className="row level-type">
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="level-android">Android</div>
                        <div className="level-web">Web</div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="level-price">
                          {lv.price_android}
                          {lv.price_web}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
}
        </div>
      </div>
    );
  }
}

export default Level;
