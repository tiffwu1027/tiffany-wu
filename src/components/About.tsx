import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import headShot from '../images/headshot.jpg';
import '../styling/About.css';


interface Props {

}

export const About: React.FC<Props> = () => {

    return (
      <div id="about">

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">About Me</h1>
         </div>
      </div>

      <div className="headShot">
          <img className="headshot-img" src={headShot}></img>
          <p>Coming soon!</p>
      </div>
   </div>
    );
}