'use client'

// app/hero/transition-scene.tsx

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const TransitionScene = () => {
  return (
    <section className="relative h-screen bg-gray-800 text-white flex justify-center items-center text-center">
      <motion.div
        className="relative bg-gray-900 p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="flex justify-center items-center space-x-8">
          <motion.div className="bg-gray-700 p-4 rounded-md shadow-lg">
            <Image
              src="/myIMG.jpg"
              width={500}
              height={500}
              alt="Desk Lamp"
              className="w-16 h-16"
            />
          </motion.div>
          <motion.div className="bg-gray-700 p-4 rounded-md shadow-lg">
            <Image
              src="/myIMG.jpg"
              width={500}
              height={500}
              alt="JavaScript Book"
              className="w-16 h-16"
            />
          </motion.div>
        </div>
        <motion.p
          className="mt-8 text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          Then I discovered a new passion: crafting solutions with code.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default TransitionScene
