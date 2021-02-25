import React from 'react'
import ReactPlayer from 'react-player';

interface FunProps {

}

export const Fun: React.FC<FunProps> = ({}) => {
        return (
            <div>
                <h1>Dance</h1>
                <ReactPlayer 
                url="https://youtu.be/oAZbW928zRk"
                />
                <hr />
                <h1>Climb</h1>
            </div>
        );
}