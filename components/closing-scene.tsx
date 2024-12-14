'use client'

import { motion } from 'framer-motion'
import React from 'react'

const ClosingScene = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-[#61dbfb] to-[#007acc] text-white flex flex-col justify-center items-center text-center">
      <motion.div
        className="relative bg-gray-900 p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="text-4xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          From Delivering Postal Services to Delivering Code
        </motion.div>
        <motion.div className="mt-8">
          <button className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500">
            View My Projects
          </button>
          <button className="bg-transparent border-2 border-white py-2 px-6 rounded-lg shadow-md hover:bg-white hover:text-gray-800 ml-4">
            Get in Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ClosingScene
