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
    const showPictures = pictures.map((p, i) => {
      return (
        <div className='picture'>
          <img src={p} width='100%' alt='memoo' onClick={() => this.setState({ isOpen: true })} />
        </div>

      )
    })

    return (
      <div id='memoo'>
      <h1>Memoo game</h1>
      <div className='pictures-container'>
        {showPictures}
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


    // const showPictures = pictures.map((p, i) => {
    //   return (
    //     <div className='picture'>
    //       <img src={p.src} alt={p.alt} width="100%" />
    //     </div>
    //   )
    // })
    // return (
    //   <section id='memoo'>
    //     <div className='small-width'>
    //       <h1>Memoo game</h1>
    //       <div className='pictures-container'>
    //         {showPictures}
    //       </div>
    //     </div>
    //   </section>
    // )

  }
}


