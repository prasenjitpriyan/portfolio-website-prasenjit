import React from 'react'

const KeyStats = () => {
  return (
    <section
      id="key-stats"
      className="py-16 bg-gray-900 text-white text-center"
    >
      <h2 className="text-3xl font-bold">Key Stats</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">2+ years of experience</h3>
          <p className="mt-4">
            Crafting modern web solutions as a Front-End Developer
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">Proficient in</h3>
          <p className="mt-4">
            JavaScript, TypeScript, React, and Tailwind CSS
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">Exploring GSAP</h3>
          <p className="mt-4">
            Currently working on immersive user interfaces with GSAP animations
          </p>
        </div>
      </div>
    </section>
  )
}

export default KeyStats
