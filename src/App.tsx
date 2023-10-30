import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Features from './components/Features';
import Hero from './components/Hero';
import StatsCards from './components/StatsCards';
import ReadToJoin from './components/ReadToJoin';
import Navbar from './components/Navbar';
import Waitlist from './pages/Waitlist';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Navbar />
      <Hero />
      <About />
      <StatsCards />
      <Features />
      <ReadToJoin />
    </div>
    <Routes>
      <Route path='/waitlist' element={<Waitlist />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
