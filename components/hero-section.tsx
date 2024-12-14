import React from 'react'
import OpeningScene from './opening-scene'
import TransitionScene from './transition-scene'
import CodingInAction from './coding-in-action'
import ClosingScene from './closing-scene'

const HeroSection = () => {
  return (
    <div>
      <OpeningScene />
      <TransitionScene />
      <CodingInAction />
      <ClosingScene />
    </div>
  )
}

export default HeroSection
