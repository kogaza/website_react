import React, { Component } from 'react';
import '../App.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


export default class Memoo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    const { pictures, language, texts } = this.props;
    console.log(language);
    const showPictures = <img
      onClick={() => this.setState({ isOpen: true })}
      src={`/images/${language}/${pictures[2]}`}
      alt='memoo'
      width='100%'
    />;
    const images = pictures.map(p => `/images/${language}/${p}`);

    return (
      <div id='memoo'>
        <div className='game-container'>
          <div className='game-image'>
            {showPictures}
          </div>
          <div className='game-info'>
            <h1>{texts[13]}</h1>
            <span>{texts[14]}</span>
            <div className='game-belt belt1'></div>
            <div className='download'>
              <a download='memooGame.apk' target='_blank' href='/gameInstaller/memooGame.apk'>
                {texts[15]}
              </a>
            </div>
            <div className='game-belt belt2'></div>
            <div className='game-description'>
              <p> {texts[16]} </p>
              <p> {texts[17]} </p>
              <p> {texts[18]} </p>
            </div>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );


  }
}


