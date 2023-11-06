import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Auth from './pages/Auth';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = ():JSX.Element =>{
  return (
    <BrowserRouter>
    <div className="app min-h-screen overflow-hidden">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/auth' element={<Auth />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
