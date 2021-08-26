import React from 'react';
import '../styles/About.css'

function About ({reference}) {
    return (
        <div className='About' ref={reference}>
            <h2>About me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam culpa ad esse suscipit ut repellat itaque, nemo, amet laborum aliquam iure aliquid? Voluptate quisquam nostrum ipsa consequuntur, tempora molestias culpa.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit beatae eligendi tenetur sunt mollitia maxime labore id, dignissimos nostrum voluptate deleniti sint, quos rem rerum quo optio, debitis temporibus error.</p>
        </div>
    )
}

export default About