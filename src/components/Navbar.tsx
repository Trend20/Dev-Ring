import { FaLifeRing} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Navbar = ():JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className='flex w-full items-center justify-between bg-cyan-200 px-16'>
      <div className="flex w-80 items-center">
        <i><FaLifeRing size={50}/></i>
      </div>
      <button onClick={() => navigate('/auth')} className='bg-black rounded-br-lg text-cyan-300 font-bold p-3 mt-5 justify-center items-center flex w-40'>Get Started</button>
    </div>
  )
}

export default Navbar;