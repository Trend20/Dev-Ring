import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import StatsCards from './components/StatsCards';

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <StatsCards />
    </div>
  );
}

export default App;
