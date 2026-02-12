import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const formatTime = (value: number) => {
  if (!Number.isFinite(value)) return '0:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

type PlayerControlsProps = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onTogglePlay: () => void;
  onSeek: (next: number) => void;
  onSkip: (delta: number) => void;
};

const PlayerControls = ({
  isPlaying,
  currentTime,
  duration,
  onTogglePlay,
  onSeek,
  onSkip,
}: PlayerControlsProps) => {
  const progress = useMemo(() => (duration ? (currentTime / duration) * 100 : 0), [currentTime, duration]);
  const [skipDirection, setSkipDirection] = useState<'back' | 'forward' | null>(null);

  const handleSkip = (delta: number) => {
    setSkipDirection(delta > 0 ? 'forward' : 'back');
    onSkip(delta);
    window.setTimeout(() => setSkipDirection(null), 250);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-5 rounded-xl border border-brand-200/40 bg-white shadow-premium-md px-6 py-6"
    >
      {/* YouTube Limitation Notice - Premium Style */}
      <motion.div
        className="rounded-lg border border-brand-200/40 bg-brand-50 px-4 py-3"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-xs text-brand-800 leading-relaxed">
          <strong>ℹ️ YouTube Limitation:</strong> Playback controls are built into the YouTube player.
          Use the player controls above to pause, seek, and adjust volume.
        </p>
      </motion.div>

      {/* Time Display */}
      <div className="flex items-center justify-between text-xs font-medium text-slate-500">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {formatTime(currentTime)}
        </motion.span>
        <span className="text-slate-900 font-semibold">{formatTime(duration)}</span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 w-full rounded-full bg-brand-100/60 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-600 to-brand-500 rounded-full shadow-premium-md"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'tween', duration: 0.2 }}
        />
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-center gap-4">
        <motion.button
          type="button"
          onClick={() => handleSkip(-10)}
          disabled
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg border border-brand-200/60 bg-brand-50 px-4 py-2.5 text-xs font-semibold text-brand-600 opacity-50 cursor-not-allowed transition-all duration-300"
          title="Seeking not available for YouTube embeds - use YouTube player"
        >
          ⏪ 10s
        </motion.button>

        <motion.button
          type="button"
          onClick={onTogglePlay}
          disabled
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-3 text-sm font-semibold text-white opacity-50 cursor-not-allowed shadow-premium-md transition-all duration-300 hover:shadow-premium-lg"
          title="Play/Pause not available for YouTube embeds - use YouTube player controls"
        >
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </motion.button>

        <motion.button
          type="button"
          onClick={() => handleSkip(10)}
          disabled
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg border border-brand-200/60 bg-brand-50 px-4 py-2.5 text-xs font-semibold text-brand-600 opacity-50 cursor-not-allowed transition-all duration-300"
          title="Seeking not available for YouTube embeds - use YouTube player"
        >
          ⏩ 10s
        </motion.button>
      </div>

      {/* Helpful Hint */}
      <motion.p
        className="text-xs text-center text-slate-500 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
      >
        💡 Use the YouTube player controls above
      </motion.p>
    </motion.div>
  );
};

export default PlayerControls;
