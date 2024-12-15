'use client'

import React, { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

// Define the types for the props, using HTMLMotionProps for motion elements
interface MotionDivProps extends HTMLMotionProps<'div'> {
  children: ReactNode
}

const MotionDiv: React.FC<MotionDivProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>
}

export default MotionDiv
