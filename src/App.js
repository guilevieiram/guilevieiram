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

function App() {
  	return (
    	<div className="App">
			
			<Background1 />

			<div className='page page-1'>
				<Title />
			</div>

			<Nav />


			<div style={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				margin: '30vh auto'
			}}>

				<Profile />
				<About />

			</div>

			<Skills />


			<BallsBackground />
			
			<Projects />


			<div className="page">
				<Contact />
			</div>
			
			<BackgroundContact />

			<Footer />



    	</div>
  	);
}

export default App;
