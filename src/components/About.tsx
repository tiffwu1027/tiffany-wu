import React, { Component } from 'react';
import headShot from '../images/headshot.jpg';
import '../styling/About.css';
import eyeLogo from '../images/eye_logo.svg';
import SVG from 'react-inlinesvg';


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
          <h3>Tiffany Wu</h3>
          <p>Hi there! I am an aspiring vision science researcher, currently working with <a href="https://psych.ubc.ca/profile/ronald-rensink/">Dr. Rensink</a> in the <a href="https://viscoglab.psych.ubc.ca/">UBC Visual Cognition Lab</a>. I am interested in the intersection between computer science and psychology, specifically in relation to modelling visual attention.</p>
      </div>

      <SVG src={eyeLogo} />
   </div>
    );
}