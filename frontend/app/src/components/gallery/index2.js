import React, {Component} from 'react';
import './style.css';
import Gallery from 'react-photo-gallery';
import Galeri1 from '../../assets/gallery1.jpg';
import Galeri2 from '../../assets/gallery2.jpg';
import Galeri3 from '../../assets/gallery3.jpg';
import Galeri4 from '../../assets/gallery4.jpg';
import Galeri5 from '../../assets/gallery5.jpg';
import Galeri6 from '../../assets/gallery6.jpg';
import ImageGallery from 'react-image-gallery';

const data = [
  {
    id: 1,
    image: Galeri1
  }, {
    id: 2,
    image: Galeri2
  }, {
    id: 3,
    image: Galeri3
  }, {
    id: 4,
    image: Galeri4
  }, {
    id: 5,
    image: Galeri5
  }, {
    id: 6,
    image: Galeri6
  }
];

class Galeri extends React.Component {
  render() {
    return (
      <div className="gallery">
        <div className="gallery-title">Galeri</div>
        <Tiles className="gallery-content" data={this.props.data}/>
      </div>
    );
  }
}

class Tiles extends React.Component {
  render() {
    // Create tile for each item in data array
    // Pass data to each tile and assign a key
    return (
      <div className="tiles">
        {data.map(function(dt, index) {
          return <Tile data={dt} key={dt.id}/>
        })}
      </div>
    );
  }
}

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseOver: false
    };
    // Bind properties to class instance
    this._clickHandler = this._clickHandler.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
  }
  // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      console.log(this.props.data.name);
      this.setState({mouseOver: true})
    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({mouseOver: false})
    }
  }
  _clickHandler(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({open: true});
    } else {
      this.setState({open: false});
    }
  }

  render() {
    // Modify styles based on state values
    let tileStyle = {};
    let headerStyle = {};
    let zoom = {};
    // When tile clicked
    if (this.state.open) {
      tileStyle = {
        width: '62vw',
        height: '40vw',
        position: 'absolute',
        top: '70%',
        left: '50%',
        margin: '0',
        marginTop: '-31vw',
        marginLeft: '-31vw',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        transform: 'none'
      };
    } else {
      tileStyle = {
        width: '25vw',
        height: '15vw'
      };
    }

    return (
      <div className="tile">
        <img onMouseEnter={this._mouseEnter} onMouseLeave={this._mouseLeave} onClick={this._clickHandler} src={this.props.data.image} alt={this.props.data.name} style={tileStyle}/>
      </div>
    );
  }
}

export default Galeri;
