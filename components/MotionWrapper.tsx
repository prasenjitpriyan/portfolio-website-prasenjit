'use client'

import { useState, useEffect, ReactNode } from 'react'
import MotionDiv from './MotionDiv'

interface MotionWrapperProps {
  children: ReactNode
}

const MotionWrapper = ({ children }: MotionWrapperProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <MotionDiv
      className="relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0.8))`
      }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      {children}
    </MotionDiv>
  )
}

export default MotionWrapper
