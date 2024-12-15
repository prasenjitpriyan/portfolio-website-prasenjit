import React from 'react'
import Achievements from '@/sections/Achievements'
import Introduction from '@/sections/Introduction'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'
import MotionWrapper from '@/components/MotionWrapper'

const HomePage = () => {
  return (
    <main className="bg-my-color-1 text-my-color-3">
      <MotionWrapper>
        <Introduction />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </MotionWrapper>
    </main>
  )
}

export default HomePage
