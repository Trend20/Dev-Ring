import './App.css';
import About from './components/About';
import Features from './components/Features';
import Hero from './components/Hero';
import StatsCards from './components/StatsCards';
import ReadToJoin from './components/ReadToJoin';

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <StatsCards />
      <Features />
      <ReadToJoin />
    </div>
  );
}

export default App;
