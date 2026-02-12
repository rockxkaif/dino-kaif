import { usePlayer } from '../context/PlayerContext';
import { motion } from 'framer-motion';

const MiniPlayer = () => {
  const { activeVideo, playerMode, setPlayerMode, closePlayer } = usePlayer();

  if (!activeVideo || playerMode === 'closed' || playerMode === 'full') return null;

  return (
    <motion.div
      className="fixed bottom-20 right-4 z-40 w-[min(360px,90vw)] overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-premium-xl md:bottom-6"
      layoutId="mini-player"
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 40 }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 400,
        duration: 0.35,
      }}
    >
      <div className="flex flex-col">
        {/* Mini Iframe Preview - Click to Expand */}
        <motion.button
          type="button"
          onClick={() => setPlayerMode('full')}
          className="relative w-full bg-black overflow-hidden aspect-video group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 600 }}
        >
          <iframe
            title={activeVideo.title}
            src={activeVideo.mediaUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            playsInline
          />
          {/* Expand Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.span
              className="text-3xl text-white"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              ⛶
            </motion.span>
          </motion.div>
        </motion.button>

        {/* Mini Player Info - Light Theme */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-200/40 bg-gradient-to-br from-white to-slate-50 p-4">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-light-primary truncate">
              {activeVideo.title}
            </p>
            <p className="text-xs text-light-tertiary truncate">{activeVideo.category}</p>
          </div>
          {/* Close Button */}
          <motion.button
            type="button"
            onClick={closePlayer}
            className="flex-shrink-0 rounded-lg border border-slate-300/60 bg-slate-50/80 px-2.5 py-1.5 text-xs font-semibold text-light-secondary hover:bg-slate-100 hover:text-light-primary hover:border-slate-400/60 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✕
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MiniPlayer;
