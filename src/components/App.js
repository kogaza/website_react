import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import Contact from './Contact';
import '../App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {


    return (
      <div className="page">
        <header>
          <div className="small-width">
            <span className="title1">FRONT-END DEVELOPER</span>
            <div>
              <span className="title2">KRZYSZTOF OGAZA</span>
            </div>
          </div>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/" activeStyle={{ color: '#ff664f', backgroundColor: '#0e3c75' }}> Home </Link>
            </li>
            <li>
              <Link to="/aboutMe" activeStyle={{ color: '#ff664f', backgroundColor: '#0e3c75' }}> About me </Link>
            </li>
            <li>
              <Link to="/myProjects" activeStyle={{ color: '#ff664f', backgroundColor: '#0e3c75' }}> My projects </Link>
            </li>
            <li>
              <Link to="/contact" activeStyle={{ color: '#ff664f', backgroundColor: '#0e3c75' }}> Kontakt </Link>
            </li>
          </ul>
        </nav>
        {/* <div className="small-width"> */}

        <div>

          <Switch>
            {/* <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path='/aboutMe*' component={AboutMe} />
            <Route exact path='/myProjects*' component={MyProjects} />
            <Route exact path='/contact*' component={Contact} />
          </Switch>

        </div>

        <footer>
          <span>
            Copyright © 2017 Krzysztof Ogaza all rights reserved
        </span>
        </footer>
      </div>

    )
  }
}
    // <section className="about-me">
    //     <div className="small-width">
    //       <article className="show-elem">
    //         <div className="picture">
    //         </div>
    //       </article>
    //       <article className='text show-elem'>
    //         <p>
    //           Hello, I'm Krzysztof Ogaza. <br />
    //           I'm a front-end developer. <br />
    //           I'll create for you a website ideally suited to your expectations.
    //     </p>
    //       </article>
    //     </div>
    //   </section>
    // </div>
    // <div className="belt belt-color2"></div>
    // <section className="skills">
    //   <div className="small-width">
    //  <article> 
    //  <p>
    //     Od kilku lat intensywnie rozwiajm swoją programistyczną pasję. <br />
    //     Jestem absolwentem bootcampu prowadzonego przez CodersLab:<br />
    //     <b>"JavaScript developer: React"</b> <br />
    //     W swoich projektach uwzględniam wszystkie zaproponowane rozwiązania. <br />
    //     Staram się stale rozwijać, tak aby efekty mojej pracy były coraz lepsze. <br />
    //     W ostatnim czasie miałem okazję poznać React-Native czego efektem jest stworzenie gry "Memoo". <br />
    //     Zapraszam do współpracy!
    //   </p> 
    //  <p>
    //         I have been developing my programmatic passion for several years. <br />
    //         I'm a graduate of bootcamp run by CodersLab:<br />
    //         <b>"JavaScript developer: React"</b> <br />
    //         In my projects, I take into account all proposed solutions. <br />
    //         I try to constantly develop, so that the results of my work will be better and better. <br />
    //         Recently I had the opportunity to meet React-Native the result is the creation of the game "Memoo". <br />
    //         I invite you to cooperation!
    //   </p>
    //     </article>
    //   </div>
    // </section> 
    //  <div className="belt belt2"></div>
    // <section className="projects">
    //   <div className="projects-and-canvas">
    //     <div className="small-width">
    //       <article>
    //         <h2>My projects</h2>
    //       </article>
    //       <article>
    //         <a href="http://perfect.tychy.pl/">
    //           <img src="./images/perfect.png" alt="perfect" width="301" height="180" className="contain" />
    //         </a>
    //       </article>
    //       <article>
    //         <a href="https://tenisistaa.github.io/LionReact/">
    //           <img src="./images/lion.png" alt="lion" width="301" height="180" className="scall-down" />
    //         </a>
    //       </article>
    //       <article>
    //         <a href="https://tenisistaa.github.io/events/">
    //           <img src="./images/events.png" alt="events" width="301" height="180" className="contain" />
    //         </a>
    //       </article>
    //       <article>
    //         <a href="https://tenisistaa.github.io/forms/">
    //           <img src="./images/forms.png" alt="forms" width="301" height="180" className="contain" />
    //         </a>
    //       </article>
    //       <article>
    //         <a className="see-more">
    //           See more
    //     </a>
    //       </article>
    //     </div>
    //   </div>
    // </section>
    // <section className="contacts">
    //   <div className="small-width">
    //     <div className="contacts-element">
    //       <a href="mailto:krzysztofogaza@gmail.com">
    //         <i className="icon-mail-alt"></i>
    //         <p>krzysztofogaza@gmail.com</p>
    //       </a>
    //     </div>
    //     <div className="contacts-element">
    //       <a href="tel:793990909">
    //         <i className="icon-phone"></i>793 990 909</a>
    //     </div>
    //     <div className="contacts-element">
    //       <a href="https://github.com/tenisistaa/">
    //         <i className="icon-github-circled"></i>github</a>
    //     </div>
    //     <div className="contacts-element">
    //       <a href="https://www.linkedin.com/in/krzysztof-ogaza/">
    //         <i className="icon-linkedin-squared"></i>linkedin</a>
    //     </div>
    //   </div>
    // </section>
    // <div className="belt belt3"></div> 






