'use client'

import React from 'react'
import { Player } from '@remotion/player'
import { MyComposition } from '@/remotion/Composition'

const PlayerComponent: React.FC = () => {
  return (
    <>
      <div className="max-w-[768px] mx-auto mb-5">
        <div className="rounded-sm overflow-hidden shadow-[0_0_200px_rgba(0,_0,_0,_0.15)] mb-10 mt-15">
          <Player
            component={MyComposition}
            compositionWidth={1080}
            compositionHeight={720}
            durationInFrames={200}
            fps={30}
            controls={false}
            loop
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default PlayerComponent
