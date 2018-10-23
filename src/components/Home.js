import React from 'react';
import '../App.css';


export default class Home extends React.Component {

  render() {
    const { projects } = this.props;
    let projects3 = projects.slice();
    projects3.splice(3, projects3.length - 3);
    const showProjects = projects3.map((p, i) => {
      return (
        <article key={i}>
          <a href={p.href}>
            <img src={p.src} alt={p.alt} width="100%" />
          </a>
        </article>
      )
    })
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
            <h2>My projects</h2>
            <div className='projects-container'>
            {showProjects}
            </div>
            <span className="see-more">
              See more
            </span>
          </div>
        </section>
        <section className="contacts-home">
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
}


