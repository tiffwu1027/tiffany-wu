import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

let githubLink : string = "https://github.com/tiffwu1027";
let linkedInLink: string = "https://www.linkedin.com/in/tiffany-wu-1027/";
let instagramLink: string = "https://www.instagram.com/toytoy157/";
let twitterLink: string = "https://twitter.com/tiffwu1027";

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({}) => {
        return (
            <footer>
                <ul className="social">
               <li><a href={githubLink}><FontAwesomeIcon icon={faGithub} size="lg" color="black" /></a></li>
               <li><a href={linkedInLink}><FontAwesomeIcon icon={faLinkedin} size="lg" color="black" /></a></li>
               <li><a href={instagramLink}><FontAwesomeIcon icon={faInstagram} size="lg" color="black" /></a></li>
               <li><a href={twitterLink}><FontAwesomeIcon icon={faTwitter} size="lg" color="black" /></a></li>
            </ul>
            </footer>
        );
}