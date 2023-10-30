import { CgCommunity} from 'react-icons/cg'

const Navbar = ():JSX.Element => {
  return (
    <div className='flex w-full items-center'>
      <div className="flex">
        <i><CgCommunity /></i>
      </div>
      <button className='flex'>Get Started</button>
    </div>
  )
}

export default Navbar;