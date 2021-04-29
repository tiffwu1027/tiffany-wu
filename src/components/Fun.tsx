import React from 'react'
import ReactPlayer from 'react-player';
import '../styling/Fun.css';

interface FunProps {

}

export const Fun: React.FC<FunProps> = ({}) => {
        return (
            <div className="dance">
                <h1>Dance</h1>
                <p>I may not have ever gotten close to being a professional dancer, but I have been dancing ballet since I was 3 years old, and started learning other styles such as contemporary, lyrical, and even a little jazz and hip hop after moving to Vancouver for school. I honestly cannot imagine a life without dance. </p>
                <p>While I was at UBC, I joined the UBC Ballet Club and was deeply involved: both in the teaching and choreographing aspects, as well as organizing and coordinating events.</p>
                <p>Here is one of my proudest choreographic achievements with the club. We won the Surrey Festival of Dance competition 2019 in the Ballet(age 17-20) category with this piece I choreographed: </p>
                <ReactPlayer 
                url="https://youtu.be/oAZbW928zRk"
                />
                <p>Here is a more recent ballet piece, that I had originally choreographed for the Surrey Festival of Dance 2020. Unfortunately COVID closed down all competitions and performances a week after this show, which became our first and only opportunity to perform the piece. Even though the piece was quite rough around the edges (our full costume hadn't even arrived yet), I am still proud of the team and incredibly glad we could perform this before COVID fully hit:</p>
                <ReactPlayer 
                url="https://youtu.be/0uqLSO4kvrs"
                />
                <p>In my final year at UBC, I also joined the UBC Dance Horizon's DHCollective team: a wonderful contemporary-hip-hop cross-genre performance team. My ballet-forward self was pushed very hard to learn and embody the contemporary and occasionally hip-hop style (I was in the contemporary division, but we also had group choreography). I am incredibly grateful for the opportunity to learn and explore a different dance style from what I was used to. We worked on many pieces, but here are the concept videos that I am dancing in:</p>
                <ReactPlayer 
                url="https://youtu.be/NqlW3ti3X1I"
                />
                <ReactPlayer 
                url="https://youtu.be/X-vnlmYQAWM"
                />
                <ReactPlayer 
                url="https://youtu.be/9jCf-XtfVR4"
                />
                <hr />
                <h1>Climb</h1>
                <p>A couple friends from my co-op at Visier took me bouldering in 2019, and I quickly fell in love with the sport. Since then, I also expanded my interests to sport climbing. I was more recently introduced to outdoor climbing, and here are some of my proudest sends!</p>
                <ReactPlayer 
                url="https://youtu.be/umVfCbr_nsI"
                />
            </div>
        );
}