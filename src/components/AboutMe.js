import React from 'react';
import '../App.css';


const AboutMe = () => {
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
              Hello, I'm <mark className='colorText'>Krzysztof Ogaza</mark> <br />
              I'm a front-end developer <br />
              I'll create for you a website ideally suited to your expectations
          </p>
          </article>
        </div>
      </section>
      <section className="skills">
        <div className="small-width">
          <article>
            {/* <p>
        Od kilku lat intensywnie rozwiajm swoją programistyczną pasję. <br />
        Jestem absolwentem bootcampu prowadzonego przez CodersLab:<br />
        <b>"JavaScript developer: React"</b> <br />
        W swoich projektach uwzględniam wszystkie zaproponowane rozwiązania. <br />
        Staram się stale rozwijać, tak aby efekty mojej pracy były coraz lepsze. <br />
        W ostatnim czasie miałem okazję poznać React-Native czego efektem jest stworzenie gry "Memoo". <br />
        Zapraszam do współpracy!
      </p>  */}
            <p>
              I have been developing my programmatic passion for several years. <br />
              I'm a graduate of bootcamp run by CodersLab:<br />
              <mark className='colorText'>"JavaScript developer: React"</mark> <br />
              In my projects, I take into account all proposed solutions. <br />
              I try to constantly develop, so that the results of my work will be better and better. <br />
              Recently I had the opportunity to meet React-Native the result is the creation of the game "Memoo". <br />
              I invite you to cooperation!
            </p>
          </article>
        </div>
      </section>

    </div>

  )
}


export default AboutMe;
