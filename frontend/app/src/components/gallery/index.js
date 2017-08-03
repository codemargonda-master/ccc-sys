import React, {Component} from 'react';
import './style.css';
import Gallery from 'react-photo-gallery';
import Galeri1 from '../../assets/gallery1.jpg';
import Galeri2 from '../../assets/gallery2.jpg';
import Galeri3 from '../../assets/gallery3.jpg';
import Galeri4 from '../../assets/gallery4.jpg';
import Galeri5 from '../../assets/gallery5.jpg';
import Galeri6 from '../../assets/gallery6.jpg';

export default class Galeri extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="gallery-title">Galeri</div>
        <Gallery photos={PHOTO_SET} onClickPhoto={this.openLightbox}/>
      </div>
    );
  }
}

const PHOTO_SET = [
  {
    src: Galeri1,
    width: 300,
    height: 200,
    alt: 'image 1'
  }, {
    src: Galeri2,
    width: 300,
    height: 200,
    alt: 'image 1'
  }, {
    src: Galeri3,
    width: 300,
    height: 200,
    alt: 'image 1'
  }, {
    src: Galeri4,
    width: 300,
    height: 200,
    alt: 'image 1'
  }, {
    src: Galeri5,
    width: 300,
    height: 200,
    alt: 'image 1'
  }, {
    src: Galeri6,
    width: 300,
    height: 200,
    alt: 'image 1'
  }
];
