import './App.css';
import About from './components/About';
import Features from './components/Features';
import Hero from './components/Hero';
import StatsCards from './components/StatsCards';
import ReadToJoin from './components/ReadToJoin';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <StatsCards />
      <Features />
      <ReadToJoin />
    </div>
  );
}

export default App;
