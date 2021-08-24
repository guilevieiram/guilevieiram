import React from 'react';
import '../styles/Skills.css';

import skillsBlobOrange from '../images/skills-blob-orange.png';
import skillsBlobBlue from '../images/skills-blob-blue.png';

import python from '../images/python.png'

function Skills() {
    return (
        <div className='Skills'>
            <div className='skills-background'>
                <img className='skills-blob-blue' src={skillsBlobBlue} alt="" />
                <img className='skills-blob-orange' src={skillsBlobOrange} alt="" />
            </div>
            <div className="skills-icons">
                <img src={python} alt="" />
                <img src={python} alt="" />
                <img src={python} alt="" />
                <img src={python} alt="" />
                <img src={python} alt="" />
                <img src={python} alt="" />
                <img src={python} alt="" />
                <img src={python} alt="" />
                <img src={python} alt="" />
            </div>
        </div>
    )
}


export default Skills;