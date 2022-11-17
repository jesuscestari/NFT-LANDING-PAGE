import './App.css';
import Faq from './components/Faq';
import Hero from './components/Hero';
import History from './components/History';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';
import Diamonds from './components/Diamonds';
import gall from './assets/1500x500.jpg';


function App() {
  return (
    <div className="App">
      <Hero />
      <History />
      <img src={gall} className='imgbann ' alt="image " />
      <Roadmap />
      <Diamonds />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
