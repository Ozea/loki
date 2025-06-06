// lib/portfolioVideos.ts

// Type definitions
export interface VideoData {
  title: string
  description: string
  category: string
  duration: string
  tags: string[]
}

export interface VideoWithName extends VideoData {
  name: string
}

export type VideoCategory = 'web-development' | 'ui-ux' | 'mobile' | 'animation' | 'other'

export interface PortfolioVideos {
  [key: string]: VideoData
}

export type VideoCategories = {
  [key in VideoCategory]: string
}

// This will be auto-generated or manually updated based on your videos
export const portfolioVideos: PortfolioVideos = {
  'ai-and-environment': {
    title: 'ai and environment',
    description: 'Portfolio video',
    category: 'other',
    duration: '0:00',
    tags: [],
  },
  'ai-choices': {
    title: 'ai choices',
    description: 'Portfolio video',
    category: 'other',
    duration: '0:00',
    tags: [],
  },
  'book-shelf': {
    title: 'book shelf',
    description: 'Portfolio video',
    category: 'other',
    duration: '0:00',
    tags: [],
  },
  'doggy-paradise': {
    title: 'doggy paradise',
    description: 'Portfolio video',
    category: 'other',
    duration: '0:00',
    tags: [],
  },
  'smart-travel-award': {
    title: 'smart travel award',
    description: 'Portfolio video',
    category: 'other',
    duration: '0:00',
    tags: [],
  },
  'sr-paint': {
    title: 'sr paint',
    description: 'Portfolio video',
    category: 'other',
    duration: '0:00',
    tags: [],
  },
  'workers-inc': {
    title: 'workers inc',
    description: 'Portfolio video',
    category: 'other',
    duration: '0:00',
    tags: [],
  },
}

// Categories for filtering
export const videoCategories: VideoCategories = {
  'web-development': 'Web Development',
  'ui-ux': 'UI/UX Design',
  mobile: 'Mobile Apps',
  animation: 'Animations',
  other: 'Other Projects',
}

// Helper functions
export const getVideosByCategory = (category: VideoCategory): VideoWithName[] => {
  return Object.entries(portfolioVideos)
    .filter(([_, video]) => video.category === category)
    .map(([name, video]) => ({ name, ...video }))
}

export const getAllVideos = (): VideoWithName[] => {
  return Object.entries(portfolioVideos).map(([name, video]) => ({ name, ...video }))
}

export const getVideoByName = (name: string): VideoWithName | null => {
  return portfolioVideos[name] ? { name, ...portfolioVideos[name] } : null
}

// Auto-generate manifest from directory (use this script)
export const generateManifest = (): void => {
  console.log(`
To auto-generate the manifest, run this script:

// scripts/generate-video-manifest.js
const fs = require('fs');
const path = require('path');

const videosDir = path.join(process.cwd(), 'public', 'portfolio', 'videos');
const manifestPath = path.join(process.cwd(), 'lib', 'portfolioVideos.ts');

const videoFiles = fs.readdirSync(videosDir)
  .filter(file => file.endsWith('.mp4') || file.endsWith('.webm'))
  .filter(file => !file.includes('-480p') && !file.includes('-720p') && !file.includes('-1080p'))
  .map(file => path.parse(file).name);

const manifest = videoFiles.reduce((acc, videoName) => {
  acc[videoName] = {
    title: videoName.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()),
    description: 'Portfolio video',
    category: 'other',
    duration: '0:00',
    tags: []
  };
  return acc;
}, {});

console.log('Generated manifest:', manifest);
  `)
}
