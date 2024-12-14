import HeroSection from '@/components/hero-section'
import KeyStats from '@/components/key-stats'
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <KeyStats />
    </div>
  )
}

export default Home
