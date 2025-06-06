/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */

// scripts/generate-video-manifest.js
const fs = require('fs')
const path = require('path')

const videosDir = path.join(process.cwd(), 'public', 'portfolio', 'videos')
const manifestPath = path.join(process.cwd(), 'lib', 'portfolioVideos.ts')

const videoFiles = fs
  .readdirSync(videosDir)
  .filter((file) => file.endsWith('.mp4') || file.endsWith('.webm'))
  .filter((file) => !file.includes('-480p') && !file.includes('-720p') && !file.includes('-1080p'))
  .map((file) => path.parse(file).name)

const manifest = videoFiles.reduce((acc, videoName) => {
  acc[videoName] = {
    title: videoName.replace(/-/g, ' ').replace(/\\b\\w/g, (l) => l.toUpperCase()),
    description: 'Portfolio video',
    category: 'other',
    duration: '0:00',
    tags: [],
  }
  return acc
}, {})

console.log('Generated manifest:', manifest)
