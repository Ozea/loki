/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */

// scripts/optimize-portfolio-videos.js
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const videosDir = path.join(process.cwd(), 'public', 'portfolio', 'videos')
const thumbnailsDir = path.join(videosDir, 'thumbnails')

// Create thumbnails directory if it doesn't exist
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true })
}

// Video quality configurations
const qualities = [
  { name: '480p', scale: '854:480', crf: 30, suffix: '-480p' },
  { name: '720p', scale: '1280:720', crf: 28, suffix: '-720p' },
  { name: '1080p', scale: '1920:1080', crf: 26, suffix: '-1080p' },
]

console.log('🎬 Starting video optimization...\n')

// Get all video files
const videoFiles = fs
  .readdirSync(videosDir)
  .filter((file) => {
    const ext = path.extname(file).toLowerCase()
    return ['.mp4', '.mov', '.avi', '.mkv', '.webm'].includes(ext)
  })
  .filter((file) => {
    // Skip already optimized files
    return !file.includes('-480p') && !file.includes('-720p') && !file.includes('-1080p')
  })

console.log(`Found ${videoFiles.length} videos to optimize:`)
videoFiles.forEach((file) => console.log(`  - ${file}`))
console.log()

videoFiles.forEach((file, index) => {
  const inputPath = path.join(videosDir, file)
  const basename = path.parse(file).name
  const originalSize = fs.statSync(inputPath).size

  console.log(`\n📹 Processing ${index + 1}/${videoFiles.length}: ${file}`)
  console.log(`   Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`)

  try {
    // Get video info
    const videoInfo = execSync(`ffprobe -v quiet -print_format json -show_format -show_streams "${inputPath}"`, { encoding: 'utf8' })
    const info = JSON.parse(videoInfo)
    const videoStream = info.streams.find((s) => s.codec_type === 'video')

    const originalWidth = videoStream.width
    const originalHeight = videoStream.height
    const duration = parseFloat(info.format.duration)

    console.log(`   Dimensions: ${originalWidth}x${originalHeight}`)
    console.log(`   Duration: ${Math.floor(duration)}s`)

    // Generate optimized versions
    qualities.forEach((quality) => {
      // Skip if target resolution is larger than original
      const [targetWidth] = quality.scale.split(':').map(Number)
      if (targetWidth > originalWidth) {
        console.log(`   ⏭️  Skipping ${quality.name} (larger than original)`)
        return
      }

      const outputMp4 = path.join(videosDir, `${basename}${quality.suffix}.mp4`)
      const outputWebm = path.join(videosDir, `${basename}${quality.suffix}.webm`)

      // Generate MP4
      if (!fs.existsSync(outputMp4)) {
        console.log(`   🔄 Creating ${quality.name} MP4...`)
        execSync(
          `ffmpeg -i "${inputPath}" -vf scale=${quality.scale} -c:v libx264 -crf ${quality.crf} -preset medium -c:a aac -b:a 128k -movflags +faststart "${outputMp4}"`,
          { stdio: 'ignore' }
        )
        const newSize = fs.statSync(outputMp4).size
        console.log(`   ✅ ${quality.name} MP4: ${(newSize / 1024 / 1024).toFixed(2)} MB`)
      } else {
        console.log(`   ⏭️  ${quality.name} MP4 already exists`)
      }

      // Generate WebM
      if (!fs.existsSync(outputWebm)) {
        console.log(`   🔄 Creating ${quality.name} WebM...`)
        try {
          execSync(
            `ffmpeg -i "${inputPath}" -vf scale=${quality.scale} -c:v libvpx-vp9 -crf ${
              quality.crf + 2
            } -b:v 0 -c:a libopus -b:a 128k "${outputWebm}"`,
            { stdio: 'ignore' }
          )
          const newSize = fs.statSync(outputWebm).size
          console.log(`   ✅ ${quality.name} WebM: ${(newSize / 1024 / 1024).toFixed(2)} MB`)
        } catch (error) {
          console.log(`   ⚠️  WebM generation failed (VP9 might not be available)`)
        }
      } else {
        console.log(`   ⏭️  ${quality.name} WebM already exists`)
      }
    })

    // Generate thumbnail
    const thumbnailPath = path.join(thumbnailsDir, `${basename}.jpg`)
    if (!fs.existsSync(thumbnailPath)) {
      console.log(`   🔄 Creating thumbnail...`)
      const timeStamp = Math.min(5, duration / 4) // 5 seconds or 1/4 through video
      execSync(`ffmpeg -i "${inputPath}" -ss ${timeStamp} -vframes 1 -vf scale=480:270 -q:v 5 "${thumbnailPath}"`, { stdio: 'ignore' })
      console.log(`   ✅ Thumbnail created`)
    } else {
      console.log(`   ⏭️  Thumbnail already exists`)
    }
  } catch (error) {
    console.error(`   ❌ Error processing ${file}:`, error.message)
  }
})

console.log('\n🎉 Video optimization complete!')
console.log('\nGenerated files structure:')
console.log('public/portfolio/videos/')
console.log('├── original-video.mp4')
console.log('├── original-video-480p.mp4')
console.log('├── original-video-720p.mp4')
console.log('├── original-video-1080p.mp4')
console.log('├── original-video-480p.webm')
console.log('├── original-video-720p.webm')
console.log('├── original-video-1080p.webm')
console.log('└── thumbnails/')
console.log('    └── original-video.jpg')
