import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Auth from './pages/Auth';
import Home from './pages/Home';
import Profile from './pages/Profile';
import UpdateProfile from './components/UpdateProfile';
import Navbar from './components/Navbar';

const App = ():JSX.Element =>{
  return (
    <BrowserRouter>
    <div className="app min-h-screen flex flex-col w-full overflow-hidden bg-cyan-200">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/auth' element={<Auth />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/update' element={<UpdateProfile />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
