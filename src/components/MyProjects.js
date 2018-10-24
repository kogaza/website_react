import React from 'react';
import '../App.css';


export default class MyProjects extends React.Component {

  render() {
    const { projects } = this.props;
    const showProjects = projects.map((p, i) => {
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
        <section className="projects my-projects">
          <div className="small-width">
              <h2>My projects</h2>
          <div className='projects-container'>
            {showProjects}
          </div>

          </div>
        </section>
        
      </div>
    )
  }
}


