import React from 'react';
import '../styles/Projects.css';

import Card from './Card'


import projects from '../data/projects.json';
import texts from '../data/texts.json';

function Projects({language, reference}) {
    return (
        <div className="Projects" ref={reference}>
            <h1>{texts.projectsTitle[language.sign]}</h1>
            <div className="cards-container">
                {projects.map(({title, image, description, link}) => (
                    <Card
                        language={language}
                        key={title}
                        image={image}
                        title={title}
                        text={description[language.sign]}
                        link={link}
                    />
                ))}
            </div>

        </div>
    )
}
export default Projects;