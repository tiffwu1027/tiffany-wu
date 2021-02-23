import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

let githubLink : string = "https://github.com/tiffwu1027";
let linkedInLink: string = "https://www.linkedin.com/in/tiffany-wu-1027/";
let instagramLink: string = "https://www.instagram.com/toytoy157/";
let twitterLink: string = "https://twitter.com/tiffwu1027";

export default function Introduction() {

    return (
      <header id="home">

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Tiffany Wu.</h1>
            <h3>Hello! I'm an aspiring vision science researcher from UBC with an interest in computation and visual attention.</h3>
            <hr />
            <ul className="social">
               <li><a href={githubLink}><FontAwesomeIcon icon={faGithub} size="lg" /></a></li>
               <li><a href={linkedInLink}><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
               <li><a href={instagramLink}><FontAwesomeIcon icon={faInstagram} size="lg" /></a></li>
               <li><a href={twitterLink}><FontAwesomeIcon icon={faTwitter} size="lg" /></a></li>
            </ul>
         </div>
      </div>

   </header>
    );
}