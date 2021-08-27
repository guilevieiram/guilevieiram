import React from 'react';
import '../styles/Projects.css';

import Card from './Card'


import projects from '../data/projects.json'


function Projects({reference}) {
    return (
        <div className="Projects" ref={reference}>
            <h1>Projects</h1>
            <div className="cards-container">
                {projects.map(({title, image, description, link}) => (
                    <Card
                        key={title}
                        image={image}
                        title={title}
                        text={description}
                        link={link}
                    />
                ))}
            </div>

        </div>
    )
}
export default Projects;