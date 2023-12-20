import './App.css';
import {
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import Auth from './pages/Auth';
import Home from './pages/Home';
import Profile from './pages/Profile';
import UpdateProfile from './components/UpdateProfile';
import Navbar from './components/Navbar';

const App = ():JSX.Element =>{
  const location = useLocation();
  console.log(location.pathname);
  const {auth} = useParams();
  
  return (
    <div className="app min-h-screen flex flex-col w-full overflow-hidden bg-cyan-200">
    {location.pathname !== '/auth' ? <Navbar /> : ''}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/auth' element={<Auth />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/update' element={<UpdateProfile />} />
    </Routes>
    </div>
  );
}

export default App;
