import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import Contact from './Contact';
import Memoo from './Memoo';
import { translate } from './translate'
import '../App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          href: "https://perfect.tychy.pl/",
          src: "/images/perfect.png",
          alt: "perfect",
        },
        {
          href: "https://fotodawid.eu",
          src: "/images/fotoDawid.png",
          alt: "foto_dawid",
        },
        {
          href: "/#/memoo",
          src: "/images/memooPL.png",
          alt: "memoo",
        },
        {
          href: "https://tenisistaa.github.io/LionReact/",
          src: "/images/lion.png",
          alt: "lion",
        },
        {
          href: "https://tenisistaa.github.io/events/",
          src: "/images/events.png",
          alt: "events",
        },
        {
          href: "https://tenisistaa.github.io/forms/",
          src: "./images/forms.png",
          alt: "forms",
        }
      ],
      pictures: [
        "screen1.png",
        "screen2.png",
        "screen3.png",
        "screen4.png",
      ],
      hamburger: true,
      language: 'polish',
      texts: []
    }
  }
  componentDidMount() {
    this.showHamburger();
    this.translateTexts('polish');
  }

  showHamburger = () => {
    const { hamburger } = this.state;
    if ((!hamburger && window.innerWidth <= 900) || (hamburger && window.innerWidth > 900)) {
      this.setState({
        hamburger: !hamburger
      });
    }
  }

  showMobileMenu = (arg) => {
    if (window.innerWidth < 900) {
      if (arg === 'showMenu') {
        this.setState({
          hamburger: false
        })
      } else if (arg === 'showHamburger') {
        this.setState({
          hamburger: true
        })
      }
    }
  }

  translateTexts = (lang) => {
    let texts = translate(lang);
    this.setState({
      texts
    })
  }

  changeLanguage = (lang) => {
    this.showMobileMenu('showHamburger');
    this.translateTexts(lang);
    this.setState({
      language: lang,
    })
  }

  render() {
    const { hamburger, projects, texts, language, pictures } = this.state;
    window.addEventListener('resize', this.showHamburger);
    const navigation = hamburger ?
      <div className='hamburger' onClick={() => this.showMobileMenu('showMenu')}>
        <div className='rectangle'></div>
        <div className='rectangle'></div>
        <div className='rectangle'></div>
      </div>
      :
      <nav>
        <ul>
          <li onClick={() => this.showMobileMenu('showHamburger')}>
            <Link to="/aboutMe" activeClassName="active" activeStyle={{ color: '#ff664f', backgroundColor: '#0e3c75' }}> {texts[0]} </Link>
          </li>
          <li onClick={() => this.showMobileMenu('showHamburger')}>
            <Link to="/myProjects" activeClassName="active" activeStyle={{ color: '#ff664f', backgroundColor: '#0e3c75' }}> {texts[1]} </Link>
          </li>
          <li onClick={() => this.showMobileMenu('showHamburger')}>
            <Link to="/contact" activeClassName="active" activeStyle={{ color: '#ff664f', backgroundColor: '#0e3c75' }}> {texts[2]} </Link>
          </li>
        </ul>
      </nav>
    const flags = hamburger ? null :
      <div>
        <div className='flag polandFlag' onClick={() => this.changeLanguage('polish')}>
          <img src='/images/PolandFlag.png' alt='Poland flag' width='100%'></img>
        </div>
        <div className='flag britainFlag' onClick={() => this.changeLanguage('english')}>
          <img src='/images/BritainFlag.png' alt='Britain flag' width='100%'></img>
        </div>
      </div>
      const darkBackground = (hamburger || window.innerWidth >= 900) ? null :
      <div className='darkBackground'></div>

    return (
      <div className="page">
        <header>
          <div className="small-width">
            <span className="title1"><Link to="/">FRONT-END DEVELOPER</Link></span>
            <span className="title2"><Link to="/">KRZYSZTOF OGAZA</Link></span>
            {flags}
          </div>
        </header>
        {darkBackground}
        {navigation}
        <div>
          <Switch>
            {/* <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} /> */}
            {/* <Route exact path={process.env.PUBLIC_URL + '/'} component={(props) => (
              <Home projects={projects} texts={texts}
                {...props} />
            )} /> */}
            <Route exact path='/' component={(props) => (
              <Home projects={projects} texts={texts}
                {...props} />
            )} />
            <Route exact path='/aboutMe*' component={(props) => (
              <AboutMe texts={texts}
                {...props} />
            )} />
            <Route exact path='/myProjects*' component={(props) => (
              <MyProjects projects={projects} texts={texts}
                {...props} />
            )} />
            <Route exact path='/memoo*' component={(props) => (
              <Memoo texts={texts} language={language} pictures={pictures}
                {...props} />
            )} />
            <Route exact path='/contact*' component={Contact} />
          </Switch>
        </div>
        <footer>
          <span>
            Copyright © 2017 Krzysztof Ogaza {texts[12]}
          </span>
        </footer>
      </div>

    )
  }
}





