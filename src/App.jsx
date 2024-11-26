import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Features from './components/Features';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navigation from './components/Navigation';
import ScrollToTopButton from './components/ScrollToTopButton';
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

function App() {

	return (
		<>
			<Navigation/>
			<Home/>
			<About/>
			<Features/>
			<Gallery/>
			<Contacts/>
			<Footer/>
			<ScrollToTopButton/>
		</>
	)
}

export default App
