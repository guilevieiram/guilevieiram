import React from 'react';
import '../styles/Skills.css';
import * as animate from '../animations';

import skillsBlobOrange from '../images/skills-blob-orange.png';
import skillsBlobBlue from '../images/skills-blob-blue.png';

// mobile
import skillsBlobMobileOrange from '../images/skills-blob-mobile-orange.png';
import skillsBlobMobileBlue from '../images/skills-blob-mobile-blue.png';

import python from '../images/python.png'

function Skills() {
    return (
        <div className='Skills'>
            <div className='skills-background'>
                {animate.upDown(<img className='skills-blob-blue' src={skillsBlobBlue} alt="" />)}
                {animate.upDown(<img className='skills-blob-orange' src={skillsBlobOrange} alt="" />)}
            </div>
            <div className='skills-background skills-background-mobile'>
                {animate.woble(<img className='skills-blob-mobile-blue' src={skillsBlobMobileBlue} alt="" />)}
                {animate.woble(<img className='skills-blob-mobile-orange' src={skillsBlobMobileOrange} alt="" />)}
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