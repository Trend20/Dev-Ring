import React from 'react'
import profileImg from '../assets/images/pic.jpeg'

const UpdateProfile = ():JSX.Element => {
  return (
    <div className='flex w-full bg-cyan-200 min-h-screen justify-center pt-10'>
        <div className="flex flex-col items-center">
        <img src={profileImg} alt="profile" className="flex w-40 h-40 rounded-full"/>
        <h5 className='mt-5'>Dev Enock</h5>
        <div className="flex py-5 w-96 justify-center items-center">
          <p className='px-6'>Developer</p>
          <p className='px-6'>Nairobi</p>
          <p className='px-6'>Joined 2023</p>
        </div>
        </div>
        <div className="flex">
          
        </div>
    </div>
  )
}

export default UpdateProfile;