import React from 'react';
import '../App.css';


export default class MyProjects extends React.Component {

  render() {
    const { projects, texts } = this.props;
    const showProjects = projects.map((p, i) => {
      return (
        <article key={i}>
          <a href={p.href}>
            <img src={p.src} alt={p.alt} width="100%" height="100%" />
          </a>
        </article>
      )
    })
    return (
      <div>
        <section className="projects my-projects">
          <div className="small-width">
              <h2>{texts[1]}</h2>
          <div className='projects-container'>
            {showProjects}
          </div>

          </div>
        </section>
        
      </div>
    )
  }
}


