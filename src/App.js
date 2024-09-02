import './App.css';
import About from './components/landingPage/About';
import Commitment from './components/landingPage/Commitment';
import Location from './components/landingPage/Locations';
import Facilities from './components/landingPage/Facilities';
import Contact from './components/landingPage/Contact';
import Nav from './components/landingPage/Nav';
import Footer from './components/landingPage/Footer';
import Products from './components/landingPage/Products';

function App() {
  return (
    <div className="App">
      <Nav />
      <img src="/assets/bg.png" alt='background' id='home'/>
      <About />
      <Commitment />
      <Products />
      <Facilities />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
