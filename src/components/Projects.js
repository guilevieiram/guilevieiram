import React from 'react';
import '../styles/Projects.css';

import Card from './Card'

import cardTestImage from '../images/card-test.jpg'


function Projects({reference}) {
    return (
        <div className="Projects" ref={reference}>
            <h1>Projects</h1>
            <div className="cards-container">
                <Card 
                    image={cardTestImage}
                    title='Hello world'
                    text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nihil asperiores, dolorem bls? 
                    '
                    link='https://google.com'
                />
                <Card 
                    image={cardTestImage}
                    title='Hello world'
                    text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nihil asperiores, dolorem bls? 
                    '
                    link='google.com'
                />
                <Card 
                    image={cardTestImage}
                    title='Hello world'
                    text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nihil asperiores, dolorem bls? 
                    '
                    link='google.com'
                />
                <Card 
                    image={cardTestImage}
                    title='Hello world'
                    text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nihil asperiores, dolorem bls? 
                    '
                    link='google.com'
                />
            </div>

        </div>
    )
}
export default Projects;