import React, { Component } from 'react';
import Anime, {anime} from 'react-anime';
import { CardHome } from './helpers/Card';

export const Home: React.FC = () => {

    return (
      <header id="home">

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Tiffany Wu</h1>
            <h3>Hello World!</h3>
            <hr />
            <CardHome />

         </div>
      </div>

   </header>
    );
}