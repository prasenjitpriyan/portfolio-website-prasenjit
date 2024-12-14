'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const CodingInAction = () => {
  return (
    <section className="relative h-screen bg-dark-charcoal text-white flex justify-center items-center text-center">
      <motion.div
        className="relative bg-gray-800 p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="flex justify-center space-x-8">
          <motion.div className="bg-gray-700 p-4 rounded-md shadow-lg">
            <Image
              src="/myIMG.jpg"
              width={500}
              height={500}
              alt="React Logo"
              className="w-16 h-16"
            />
          </motion.div>
          <motion.div className="bg-gray-700 p-4 rounded-md shadow-lg">
            <Image
              src="/myIMG.jpg"
              width={500}
              height={500}
              alt="TypeScript Logo"
              className="w-16 h-16"
            />
          </motion.div>
        </div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <div className="text-lg font-semibold">Code Snippets in Action:</div>
          <pre className="text-sm mt-4">
            <code>{`const greet = () => { return 'Hello, World' }`}</code>
          </pre>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CodingInAction
