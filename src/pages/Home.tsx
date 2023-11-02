import React from 'react'
import About from '../components/About';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ReadToJoin from '../components/ReadToJoin';
import StatsCards from '../components/StatsCards';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Hero />
      <About />
      <StatsCards />
      <Features />
      <ReadToJoin />
    </div>
  )
}

export default Home;