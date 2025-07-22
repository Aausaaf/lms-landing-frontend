import React, { useState, useRef, useEffect } from 'react';
import Icon from './AppIcon';
import { Button } from '@/components/ui/button';

const VideoPreviewModal = ({ lesson, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  const playbackSpeeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
  const qualities = ['Auto', '1080p', '720p', '480p', '360p'];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    videoRef.current.playbackRate = speed;
    setShowSettings(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium text-lg">{lesson.title}</h3>
              <p className="text-white/70 text-sm">{lesson.duration}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            />
          </div>
        </div>

        {/* Video Player */}
        <div 
          className="relative aspect-video bg-black"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
          <video
            ref={videoRef}
            className="w-full h-full"
            poster={lesson.thumbnail}
            onClick={togglePlay}
          >
            <source src={lesson.videoUrl || "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"} type="video/mp4" />
            <track kind="captions" src={lesson.captionsUrl} srcLang="en" label="English" />
          </video>

          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Icon name="Play" size={32} className="text-white ml-1" />
              </button>
            </div>
          )}

          {/* Controls */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            {/* Progress Bar */}
            <div 
              className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-primary rounded-full transition-all duration-150"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-primary transition-colors"
                >
                  <Icon name={isPlaying ? 'Pause' : 'Play'} size={24} />
                </button>

                <div className="flex items-center space-x-2">
                  <button className="text-white hover:text-primary transition-colors">
                    <Icon name={volume === 0 ? 'VolumeX' : 'Volume2'} size={20} />
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-16 h-1 bg-white/30 rounded-full appearance-none slider"
                  />
                </div>

                <div className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="text-white hover:text-primary transition-colors"
                  >
                    <Icon name="Settings" size={20} />
                  </button>

                  {showSettings && (
                    <div className="absolute bottom-full right-0 mb-2 bg-black/90 rounded-lg p-3 min-w-32">
                      <div className="text-white text-sm mb-2">Speed</div>
                      <div className="space-y-1">
                        {playbackSpeeds.map((speed) => (
                          <button
                            key={speed}
                            onClick={() => handleSpeedChange(speed)}
                            className={`block w-full text-left px-2 py-1 text-sm rounded hover:bg-white/20 transition-colors ${
                              playbackSpeed === speed ? 'text-primary' : 'text-white'
                            }`}
                          >
                            {speed}x
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button className="text-white hover:text-primary transition-colors">
                  <Icon name="Maximize" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="p-4 bg-card">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-2">
                {lesson.description}
              </p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>{lesson.views} views</span>
                <span>Published on {new Date().toLocaleDateString()}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <Button variant="outline" size="sm" iconName="ThumbsUp" iconPosition="left">
                Like
              </Button>
              <Button variant="outline" size="sm" iconName="Share2" iconPosition="left">
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreviewModal;