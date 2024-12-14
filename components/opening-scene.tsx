'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const OpeningScene = () => {
  return (
    <section className="relative h-screen bg-gray-100 flex justify-center items-center text-center">
      {/* Vintage Desk with Postal Items */}
      <motion.div
        className="relative bg-gray-200 p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex items-center justify-center space-x-8">
          <motion.div className="bg-white p-4 rounded-md shadow-lg">
            <Image
              src="/myIMG.jpg"
              alt="Postal Envelope"
              width={500}
              height={500}
              className="w-16 h-16"
            />
          </motion.div>
          <motion.div className="bg-white p-4 rounded-md shadow-lg">
            <Image
              src="/myIMG.jpg"
              alt="Seal Stamp"
              width={500}
              height={500}
              className="w-16 h-16"
            />
          </motion.div>
          <motion.div className="bg-white p-4 rounded-md shadow-lg">
            <Image
              src="/myIMG.jpg"
              alt="Post Box"
              width={500}
              height={500}
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
          For 10 years, I connected people with their stories through letters
          and deliveries.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default OpeningScene
