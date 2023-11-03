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
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="app min-h-screen">
    <Routes>
      <Route path="/" element={<Home />}/>
      {/* <Route path='/waitlist' element={<Waitlist />} /> */}
      <Route path='/auth' element={<Auth />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
