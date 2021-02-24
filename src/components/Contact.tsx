import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import '../styling/Contact.css';

let githubLink : string = "https://github.com/tiffwu1027";
let linkedInLink: string = "https://www.linkedin.com/in/tiffany-wu-1027/";
let instagramLink: string = "https://www.instagram.com/toytoy157/";
let twitterLink: string = "https://twitter.com/tiffwu1027";

interface ContactProps {

}

export const Contact: React.FC<ContactProps> = ({}) => {
        return (
            <div>
                <h1>Contact</h1>
                <div className="container">
                    <div className="email">
                        <p>Send me an email: </p>
                    </div>
                    <div className="links">
                        <p>Find me on:  </p>
                        <p>GitHub: <a href={githubLink}><FontAwesomeIcon icon={faGithub} size="lg" color="black" /></a></p>
                        <p>LinkedIn: <a href={linkedInLink}><FontAwesomeIcon icon={faLinkedin} size="lg" color="black" /></a></p>
                        <p>Instagram: <a href={instagramLink}><FontAwesomeIcon icon={faInstagram} size="lg" color="black" /></a></p>
                        <p>Twitter: <a href={twitterLink}><FontAwesomeIcon icon={faTwitter} size="lg" color="black" /></a></p>
                    </div>
                </div>

            </div>
        );
}