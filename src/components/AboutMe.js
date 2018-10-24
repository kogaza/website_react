import React from 'react';
import '../App.css';


export default class Home extends React.Component {

  render() {
    const { texts } = this.props;
    return (
      <div>

        <section id='about-me'>
          <div className="small-width">
            <article className="show-elem">
              <div className="picture">
              </div>
            </article>
            <article className='text show-elem'>
              <p>
                {texts[3]} <mark className='colorText'>Krzysztof Ogaza</mark> <br />
                {texts[4]} <br />
                {texts[5]}
              </p>
            </article>
          </div>
        </section>
        <section className="skills">
          <div className="small-width">
            <article>
              <p>
                {texts[6]} <br />
                {texts[7]}<br />
                <mark className='colorText'>"JavaScript developer: React"</mark> <br />
                {texts[8]} <br />
                {texts[9]} <br />
                {texts[10]} "Memoo". <br />
                {texts[11]}
              </p>
            </article>
          </div>
        </section>

      </div>

    )
  }
}

