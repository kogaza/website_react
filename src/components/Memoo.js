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
    const { pictures } = this.props;
    const showPictures = <img
      onClick={() => this.setState({ isOpen: true })}
      src={pictures[2]}
      alt='memoo'
      width='100%'
    />;

    return (
      <div id='memoo'>
        <div className='game-container'>
          <div className='game-image'>
            {showPictures}
          </div>
          <div className='game-info'>
            <h1>Memoo game</h1>
            <span>for Android</span>
            <div className='game-belt belt1'></div>
            <div className='download'>
              <a download='memooGame.apk' target='_blank' href='/gameInstaller/memooGame.apk'>
                Download APK file
            </a>
            </div>
            <div className='game-belt belt2'></div>
            <div className='game-description'>
              <p>
                Memoo is a game where you need to match pairs of tiles. You turn over one tiles
                and try to find a matching tile.
            </p>
            <p>
              The game has 3 game levels.
            </p>
            <p>
              There are 3 languages available: Polish, English and Croatian.
            </p>
            </div>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={pictures[photoIndex]}
            nextSrc={pictures[(photoIndex + 1) % pictures.length]}
            prevSrc={pictures[(photoIndex + pictures.length - 1) % pictures.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + pictures.length - 1) % pictures.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % pictures.length,
              })
            }
          />
        )}
      </div>
    );


  }
}


