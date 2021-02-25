import React from 'react'
import ReactPlayer from 'react-player';
import '../styling/Fun.css';

interface FunProps {

}

export const Fun: React.FC<FunProps> = ({}) => {
        return (
            <div className="dance">
                <h1>Dance</h1>
                <ReactPlayer 
                url="https://youtu.be/oAZbW928zRk"
                />
                <hr />
                <h1>Climb</h1>
            </div>
        );
}