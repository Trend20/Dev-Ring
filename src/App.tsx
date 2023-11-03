import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="app min-h-screen">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/auth' element={<Auth />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
