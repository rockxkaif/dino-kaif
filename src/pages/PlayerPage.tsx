import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PlayerControls from '../components/PlayerControls';
import InPlayerVideoList from '../components/InPlayerVideoList';
import RelatedVideoList from '../components/RelatedVideoList';
import { usePlayer } from '../context/PlayerContext';
import { categories } from '../data/videos';

const PlayerPage = () => {
  const { videoId } = useParams();
  const { activeVideo, setActiveVideo, switchVideo, setPlayerMode, playerMode, setIsDragging, isDragging } = usePlayer();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ y: number; time: number } | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isListOpen, setIsListOpen] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [nextVideoId, setNextVideoId] = useState<string | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [dragY, setDragY] = useState(0);

  // Load active video from URL param
  useEffect(() => {
    if (!videoId) return;
    
    const video = categories
      .flatMap((cat) => cat.videos)
      .find((v) => v.slug === videoId || v.id === videoId);
    
    if (video) {
      setActiveVideo(video);
      setCurrentTime(0);
      setPlayerMode('full');
    }
  }, [videoId, setActiveVideo, setPlayerMode]);

  // Handle autoplay next countdown
  useEffect(() => {
    if (!countdown || !nextVideoId) return;
    const timer = window.setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [countdown, nextVideoId]);

  // Auto-play next when countdown reaches 0
  useEffect(() => {
    if (countdown === 0 && nextVideoId && activeVideo) {
      const nextVideo = categories
        .flatMap((cat) => cat.videos)
        .find((v) => v.id === nextVideoId);
      if (nextVideo) {
        switchVideo(nextVideo);
        setCountdown(0);
        setNextVideoId(null);
      }
    }
  }, [countdown, nextVideoId, activeVideo, switchVideo]);

  // Detect video end and start countdown
  const handleEnded = () => {
    const relatedVideos = useMemo(() => {
      const category = categories.find((entry) => entry.name === activeVideo?.category);
      return category?.videos ?? [];
    }, [activeVideo]);

    const index = relatedVideos.findIndex((video) => video.id === activeVideo?.id);
    if (index !== -1 && index + 1 < relatedVideos.length) {
      const nextVideo = relatedVideos[index + 1];
      setNextVideoId(nextVideo.id);
      setCountdown(2);
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartRef.current = {
      y: event.clientY,
      time: Date.now(),
    };
    setDragY(0);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current || playerMode !== 'full') return;
    
    const currentDrag = event.clientY - dragStartRef.current.y;
    setDragY(Math.max(0, currentDrag)); // Only allow dragging down

    // Trigger minimize at 120px threshold
    if (currentDrag > 120) {
      setIsDragging(true);
      setPlayerMode('mini');
      setDragY(0);
      dragStartRef.current = null;
    }
  };

  const handlePointerUp = () => {
    dragStartRef.current = null;
    setDragY(0);
    setIsDragging(false);
  };

  if (!activeVideo && videoId) {
    // If we have a videoId but no activeVideo yet, check if it exists
    const video = categories
      .flatMap((cat) => cat.videos)
      .find((v) => v.slug === videoId || v.id === videoId);
    
    if (!video) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-brand-200/40 bg-white shadow-premium-md p-12 text-center"
        >
          <h2 className="text-2xl font-bold text-slate-900">🎬 Video Not Found</h2>
          <p className="mt-3 text-sm text-slate-600">The video you are looking for does not exist. Return to home to explore more videos.</p>
          <motion.button
            type="button"
            onClick={() => window.location.href = '/'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-premium-md transition-all duration-300 hover:shadow-premium-lg active:scale-95"
          >
            Back to Home
          </motion.button>
        </motion.div>
      );
    }
    // Video exists but hasn't been set in state yet, show loading
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-xl border border-brand-200/40 bg-white shadow-premium-md p-8 text-center"
      >
        <motion.p
          className="text-sm text-slate-900 font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading video...
        </motion.p>
      </motion.div>
    );
  }

  if (!activeVideo) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-slate-200/60 bg-white shadow-premium-md p-12 text-center"
      >
        <h2 className="text-2xl font-bold text-light-primary">🎬 Video Not Found</h2>
        <p className="mt-3 text-sm text-light-secondary">The video you are looking for does not exist. Return to home to explore more videos.</p>
        <motion.button
          type="button"
          onClick={() => window.location.href = '/'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-premium-md transition"
        >
          Back to Home
        </motion.button>
      </motion.div>
    );
  }

  const relatedVideos = useMemo(() => {
    const category = categories.find((entry) => entry.name === activeVideo.category);
    return category?.videos ?? [];
  }, [activeVideo]);

  const nextVideo = useMemo(() => {
    const index = relatedVideos.findIndex((video) => video.id === activeVideo.id);
    if (index === -1 || index + 1 >= relatedVideos.length) return null;
    return relatedVideos[index + 1];
  }, [relatedVideos, activeVideo]);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
    // YouTube API would be used here if full API access available
  };

  const handleSeek = (nextTime: number) => {
    setCurrentTime(nextTime);
    // YouTube API seekTo would be called here
  };

  const handleSkip = (delta: number) => {
    const nextTime = Math.max(0, Math.min(duration, currentTime + delta));
    setCurrentTime(nextTime);
    // YouTube API seekTo would be called here
  };

  return (
    <AnimatePresence mode="wait">
      {activeVideo && playerMode === 'full' && (
        <motion.div
          key="player-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 pb-20 md:pb-6"
        >
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex-1 space-y-4">
              {/* Header - OUTSIDE drag container */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between border border-brand-200/40 bg-white/95 backdrop-blur-md rounded-t-xl px-5 py-4 shadow-premium-sm"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-600">Now Playing</p>
                  <h2 className="text-base font-bold text-slate-900 mt-1 line-clamp-1">{activeVideo.title}</h2>
                </div>
                <motion.button
                  type="button"
                  onClick={() => setPlayerMode('mini')}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="rounded-lg border border-brand-200/60 bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-600 hover:bg-brand-100 hover:text-brand-700 transition-all duration-300 flex-shrink-0 ml-3 active:scale-95"
                >
                  Minimize
                </motion.button>
              </motion.div>

              {/* Player Container - INSIDE drag container */}
              <motion.div
                ref={playerContainerRef}
                className="overflow-hidden rounded-b-xl border-l border-r border-b border-brand-200/30 bg-black/90 shadow-premium-lg"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                drag="y"
                dragElastic={0.2}
                dragConstraints={{ top: 0, bottom: 2000 }}
                onDragEnd={(event, info) => {
                  if (info.velocity.y > 500 || info.offset.y > 120) {
                    setPlayerMode('mini');
                  }
                  setDragY(0);
                }}
                whileDrag={{ cursor: 'grabbing' }}
              >
                {/* YouTube Iframe - NEVER unmounted */}
                <iframe
                  ref={iframeRef}
                  title={activeVideo.title}
                  src={activeVideo.mediaUrl + '?autoplay=1&mute=1'}
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  playsInline
                />
              </motion.div>

              {/* Next Video Countdown */}
              <AnimatePresence>
                {countdown > 0 && nextVideo ? (
                  <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="rounded-lg border border-brand-300/60 bg-gradient-to-r from-brand-50 to-brand-25 px-5 py-4 text-sm shadow-premium-md"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-600">Up Next</p>
                        <p className="text-sm font-bold text-light-primary mt-1 line-clamp-1">{nextVideo.title}</p>
                        <motion.p
                          className="text-xs text-brand-700 font-semibold mt-1"
                          key={countdown}
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                        >
                          Playing in {countdown}s
                        </motion.p>
                      </div>
                      <motion.button
                        type="button"
                        onClick={() => {
                          setCountdown(0);
                          setNextVideoId(null);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg border border-brand-400/60 bg-white px-4 py-2 text-xs font-semibold text-brand-700 hover:bg-brand-50 transition flex-shrink-0"
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {/* Player Controls */}
              <PlayerControls
                isPlaying={isPlaying}
                currentTime={currentTime}
                duration={duration}
                onTogglePlay={handleTogglePlay}
                onSeek={handleSeek}
                onSkip={handleSkip}
              />

              {/* In-Player Video List Component */}
              <InPlayerVideoList
                videos={relatedVideos}
                activeId={activeVideo.id}
                isOpen={isListOpen}
                onToggle={setIsListOpen}
              />

              {/* Info Guide */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="rounded-lg border border-slate-200/60 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm p-5 text-xs space-y-4"
              >
                <div>
                  <p className="text-xs font-bold text-blue-900 uppercase tracking-widest">
                    Working Features
                  </p>
                  <ul className="text-xs text-blue-800 space-y-1.5 ml-4 mt-2">
                    <li>Drag player down 120px to minimize</li>
                    <li>Click videos to switch (no reload)</li>
                    <li>Mini-player persists across pages</li>
                    <li>Auto-play next with 2s countdown</li>
                  </ul>
                </div>
                <div className="border-t border-blue-200/40 pt-3">
                  <p className="text-xs font-bold text-blue-900">
                    About YouTube Controls
                  </p>
                  <p className="text-blue-800 text-xs mt-1">
                    YouTube embeds have built-in players. Use the player controls above to pause, seek, and adjust volume.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Related Videos (Desktop) */}
            <aside className="hidden w-full space-y-5 lg:block lg:w-[340px]">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-5 shadow-premium-md"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-brand-600">Gesture Tips</p>
                <p className="mt-3 text-sm leading-relaxed text-light-secondary">
                  Drag the player downward to minimize. Click any video below to switch instantly.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <RelatedVideoList videos={relatedVideos} activeId={activeVideo.id} />
              </motion.div>
            </aside>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlayerPage;
