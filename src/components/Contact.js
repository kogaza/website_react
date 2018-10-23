import React from 'react';
import '../App.css';


const Contact = () => {

  return (
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
  )
}


export default Contact;