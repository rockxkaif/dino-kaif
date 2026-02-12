import { motion, AnimatePresence } from 'framer-motion';
import { Video } from '../data/videos';
import { usePlayer } from '../context/PlayerContext';

const InPlayerVideoList = ({
  videos,
  activeId,
  isOpen,
  onToggle,
}: {
  videos: Video[];
  activeId: string;
  isOpen: boolean;
  onToggle: (next: boolean) => void;
}) => {
  const { switchVideo } = usePlayer();

  const handleSelectVideo = (video: Video) => {
    switchVideo(video);
    onToggle(false);
  };

  return (
    <div className="rounded-lg border border-brand-200/40 bg-white shadow-premium-md p-4">
      <motion.button
        type="button"
        onClick={() => onToggle(!isOpen)}
        className="flex w-full items-center justify-between gap-4 rounded-lg border border-brand-200/50 bg-brand-50 px-4 py-3 text-left transition-all duration-300 hover:bg-brand-75 hover:shadow-premium-sm active:scale-98"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-600">In-Player Videos</p>
          <p className="text-sm font-semibold text-slate-900 mt-0.5">
            {isOpen ? 'Hide list' : 'Tap to see related'}
          </p>
        </div>
        <motion.span
          className="text-lg text-brand-600"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, type: 'spring', stiffness: 400 }}
        >
          ⋀
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-4 max-h-[55vh] space-y-3 overflow-y-auto pr-2">
              {videos.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-sm text-slate-500">No related videos</p>
                </div>
              ) : (
                videos.map((video, index) => (
                  <motion.button
                    key={video.id}
                    type="button"
                    onClick={() => handleSelectVideo(video)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className={`flex w-full items-center gap-3 overflow-hidden rounded-lg border px-3 py-3 transition-all duration-300 ${
                      video.id === activeId
                        ? 'border-brand-300/60 bg-brand-50 shadow-premium-sm hover:shadow-premium-md'
                        : 'border-brand-100/40 bg-white hover:border-brand-200/60 hover:shadow-premium-sm'
                    }`}
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="h-14 w-24 rounded-md object-cover flex-shrink-0 transition-transform duration-300 hover:scale-105"
                    />
                    <div className="flex flex-1 flex-col gap-1 min-w-0 text-left">
                      <p className={`text-xs font-semibold line-clamp-2 ${
                        video.id === activeId
                          ? 'text-brand-700'
                          : 'text-slate-900'
                      }`}>{video.title}</p>
                      <span className="text-xs text-slate-500">{video.duration || 'YouTube'}</span>
                    </div>
                    {video.id === activeId && (
                      <motion.span
                        className="text-xs text-brand-600 font-bold flex-shrink-0 bg-brand-100 px-2 py-1 rounded-md"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                      >
                        ▶
                      </motion.span>
                    )}
                  </motion.button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InPlayerVideoList;
