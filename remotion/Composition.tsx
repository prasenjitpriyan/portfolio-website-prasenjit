'use client'

import React from 'react'
import { AbsoluteFill, useVideoConfig } from 'remotion'

export const MyComposition: React.FC = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig()

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60,
        backgroundColor: 'lime'
      }}
    >
      This {width}x{height}px video is {durationInFrames / fps} seconds long.
    </AbsoluteFill>
  )
}
