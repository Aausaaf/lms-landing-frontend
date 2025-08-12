"use client"

import { useState, useRef, useCallback, memo } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2, VolumeX, Settings, SkipBack, SkipForward, Maximize2, Minimize2 } from "lucide-react"

/**
 * Enhanced video player component with modern controls and features
 */
const EnhancedVideoPlayer = memo(({ videoUrl, title, onPlay, onPause, onProgress }) => {
  // Player state
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [playbackRate, setPlaybackRate] = useState(1)

  // Refs
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const controlsTimeoutRef = useRef(null)

  // Format time helper
  const formatTime = useCallback((time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }, [])

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        onPause?.()
      } else {
        videoRef.current.play()
        onPlay?.()
      }
      setIsPlaying(!isPlaying)
    }
  }, [isPlaying, onPlay, onPause])

  // Handle volume change
  const handleVolumeChange = useCallback((newVolume) => {
    const volumeValue = newVolume[0] / 100
    setVolume(volumeValue)
    if (videoRef.current) {
      videoRef.current.volume = volumeValue
    }
    setIsMuted(volumeValue === 0)
  }, [])

  // Toggle mute
  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      const newMuted = !isMuted
      setIsMuted(newMuted)
      videoRef.current.muted = newMuted
    }
  }, [isMuted])

  // Handle progress change
  const handleProgressChange = useCallback(
    (newProgress) => {
      const time = (newProgress[0] / 100) * duration
      setCurrentTime(time)
      if (videoRef.current) {
        videoRef.current.currentTime = time
      }
    },
    [duration],
  )

  // Skip forward/backward
  const skipTime = useCallback(
    (seconds) => {
      if (videoRef.current) {
        const newTime = Math.max(0, Math.min(duration, currentTime + seconds))
        videoRef.current.currentTime = newTime
        setCurrentTime(newTime)
      }
    },
    [currentTime, duration],
  )

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  // Handle mouse movement for controls visibility
  const handleMouseMove = useCallback(() => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }, [isPlaying])

  // Video event handlers
  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
      onProgress?.(videoRef.current.currentTime)
    }
  }, [onProgress])

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }, [])

  // Playback rate options
  const playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 2]

  return (
    <Card className="overflow-hidden bg-black">
      <div
        ref={containerRef}
        className="relative aspect-video bg-black group"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        {/* Video element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoUrl}
          poster="/placeholder.svg?height=400&width=800"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={togglePlay}
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
          <Button
            size="lg"
            className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30 transition-all duration-300 hover:scale-110"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="w-10 h-10 text-white" /> : <Play className="w-10 h-10 text-white ml-1" />}
          </Button>
        </div>

        {/* Controls overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
        >
          {/* Top controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <h3 className="text-white font-medium text-lg truncate">{title}</h3>
            <div className="flex items-center space-x-2">
              {/* Playback rate selector */}
              <select
                value={playbackRate}
                onChange={(e) => {
                  const rate = Number.parseFloat(e.target.value)
                  setPlaybackRate(rate)
                  if (videoRef.current) {
                    videoRef.current.playbackRate = rate
                  }
                }}
                className="bg-black/50 text-white text-sm rounded px-2 py-1 border border-white/20"
              >
                {playbackRates.map((rate) => (
                  <option key={rate} value={rate}>
                    {rate}x
                  </option>
                ))}
              </select>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Bottom controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
            {/* Progress bar */}
            <div className="space-y-1">
              <Slider
                value={[duration ? (currentTime / duration) * 100 : 0]}
                onValueChange={handleProgressChange}
                max={100}
                step={0.1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-white/80">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Play/Pause */}
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={togglePlay}>
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>

                {/* Skip buttons */}
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => skipTime(-10)}
                >
                  <SkipBack className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={() => skipTime(10)}>
                  <SkipForward className="w-4 h-4" />
                </Button>

                {/* Volume controls */}
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={toggleMute}>
                    {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                  <div className="w-20">
                    <Slider
                      value={[volume * 100]}
                      onValueChange={handleVolumeChange}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Right side controls */}
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={toggleFullscreen}>
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
})

EnhancedVideoPlayer.displayName = "EnhancedVideoPlayer"

export { EnhancedVideoPlayer }
