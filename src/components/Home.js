import React from 'react';
import '../App.css';


const Home = () => {
  return (
    <div>
      <section id='home'>
        <div className="small-width">
          <article className="show-elem">
            <div className="picture">
            </div>
          </article>
          <article className='text show-elem'>
            <p>
              Hello, I'm Krzysztof Ogaza. <br />
              I'm a front-end developer. <br />
              I'll create for you a website ideally suited to your expectations.
          </p>
          </article>
        </div>
      </section>
      <section className="projects">
        <div className="small-width">
          <article>
            <h2>My projects</h2>
          </article>
          <article>
            <a href="http:perfect.tychy.pl/">
              <img src="/images/perfect.png" alt="perfect" width="100%" height="180" />
            </a>
          </article>
          <article>
            <a href="https:tenisistaa.github.io/LionReact/">
              <img src="/images/lion.png" alt="lion" width="100%" height="180" />
            </a>
          </article>
          <article>
            <a href="https:tenisistaa.github.io/events/">
              <img src="/images/events.png" alt="events" width="100%" height="180" />
            </a>
          </article>
          <article>
            <a href="" className="see-more">
              See more
            </a>
          </article>
        </div>
      </section>
      <section className="contacts">
      <div className="small-width">
        <div className="contacts-element">
          <a href="mailto:krzysztofogaza@gmail.com">
            <i className="icon-mail-alt"></i>
            <p>krzysztofogaza@gmail.com</p>
          </a>
        </div>
        <div className="contacts-element">
          <a href="tel:793990909">
            <i className="icon-phone"></i>793 990 909</a>
        </div>
        <div className="contacts-element">
          <a href="https://github.com/tenisistaa/">
            <i className="icon-github-circled"></i>github</a>
        </div>
        <div className="contacts-element">
          <a href="https://www.linkedin.com/in/krzysztof-ogaza/">
            <i className="icon-linkedin-squared"></i>linkedin</a>
        </div>
      </div>
    </section>
    </div>
  )
}


export default Home;
