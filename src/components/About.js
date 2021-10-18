import React from 'react';
import '../styles/About.css'

function About ({reference}) {
    return (
        <div className='About' ref={reference}>
            <h2>About me</h2>
            <p>Software Engineering student (20) at <a href="">École Polytechnique de Paris</a> in love with Software Development. Worked with web development and machine learning in <a href="">Cuukin</a>, a tech-ed startup based in London </p>
            <p>Brazilian, proficiency in English (C2) and French (B1), used to work in high pressure workspaces. No problems in dealing with international and cultural diverse environments. Lived in England and France. </p>
            <p>Communicative, open minded and easly adapted personallity! Don't hesitate to reach out to give/receive advice, ask for help or just to chat!</p>
            <p>Music, cuisine, bread, cats, karate and boxing. Basically all the things I love doing appart from programming and studying!</p>
        </div>
    )
}

export default About