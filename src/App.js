import React, {useRef, useState} from 'react';

import './App.css';

import Nav from './components/Nav';
import Title from './components/Title'
import Background1 from './components/Background1'
import About from './components/About'
import Profile from './components/Profile'
import Skills from './components/Skills'
import BallsBackground from './components/BallsBackground'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundContact from './components/BackgroundContact';
import MiniGames from './components/MiniGames';


import languages from './data/languages.json';

// to deploy page: npm run deploy

function App() {

	const aboutSection = useRef();
	const projectsSection = useRef();
	const contactSection = useRef();

	const [showMinigames, setShowMinigames] = useState(false);
    const [sideBar, setSideBar] = useState(false);
	const [language, setLanguage] = useState(languages[0]); //main language

	const scrollToSection = (element) => {        
		window.scrollTo({
		top: element.current.offsetTop - window.innerHeight / 5 , //this fixing value works for SOME reason ???
		behavior: 'smooth'
	})}


  	return (
    	<div className="App">
			<div className="screen">

				<Background1 
					language={language}
				/>

				<MiniGames 
					language={language}
					display={showMinigames} 
					setDisplay={setShowMinigames}
				/>	

				<div 
					className='page page-1'
					onClick={() => {
						if(showMinigames){setShowMinigames(false)}
						if(sideBar){setSideBar(false)}
					}
					}
				>
					<Title
						language={language}
						scrollContact={() => scrollToSection(contactSection)}
						showGames={() => {setShowMinigames(!showMinigames)}}
					/>
				</div>	

				<Nav 
					language={language}
					setLanguage={setLanguage}
					scrollAbout={() => scrollToSection(aboutSection)}
					scrollProjects={() => scrollToSection(projectsSection)}
					scrollContact={() => scrollToSection(contactSection)}
					sideBar={sideBar}
					setSideBar={setSideBar}
				/>


				<div style={{
					display: 'flex',
					justifyContent: 'space-around',
					maxWidth: '70rem',
					alignItems: 'center',
					flexWrap: 'wrap',
					margin: '30vh auto'
				}}>

					<Profile />
					<About 
						language={language} 
						reference={aboutSection} 
					/>

				</div>

				<Skills />

				<BallsBackground />

				<Projects 
					reference={projectsSection} 
					language={language}	
				/>


				<Contact 
					reference={contactSection}
					language={language}
					background={
						<BackgroundContact />

					}	
				/>


			</div>

			<Footer 
				language={language}
			/>

    	</div>
  	);
}

export default App;
