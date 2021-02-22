import React, { Component } from 'react';
import '../styling/Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faChevronCircleDown, faHome} from '@fortawesome/free-solid-svg-icons';

let githubLink : string = "https://github.com/tiffwu1027";
let linkedInLink: string = "https://www.linkedin.com/in/tiffany-wu-1027/";
let instagramLink: string = "https://www.instagram.com/toytoy157/";
let twitterLink: string = "https://twitter.com/tiffwu1027";

class Header extends Component {
  render() {
    return (
      <header id="home">

      <nav id="nav-wrap">

         {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a> */}

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home"><FontAwesomeIcon icon={faHome} size="lg" /></a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	        <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#research">Research</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#fun">Fun</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

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

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><FontAwesomeIcon icon={faChevronCircleDown} size="lg" /></a>
      </p>

   </header>
    );
  }
}

export default Header;