import { Video } from '../data/videos';
import { usePlayer } from '../context/PlayerContext';
import { motion } from 'framer-motion';

const RelatedVideoList = ({ videos, activeId }: { videos: Video[]; activeId: string }) => {
  const { switchVideo } = usePlayer();

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-light-primary uppercase tracking-wide">Up next in this category</h3>
      <div className="space-y-3">
        {videos.map((video, index) => (
          <motion.button
            key={video.id}
            type="button"
            onClick={() => switchVideo(video)}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.04, duration: 0.3 }}
            whileHover={{ x: 4, backgroundColor: 'rgba(249, 250, 251, 1)' }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center gap-3 overflow-hidden rounded-lg border px-3 py-3 text-left transition-all duration-200 ${
              video.id === activeId
                ? 'border-brand-300/60 bg-brand-50 shadow-premium-sm'
                : 'border-slate-200/60 bg-white hover:border-brand-300/40 hover:shadow-premium-sm'
            }`}
          >
            <img 
              src={video.thumbnailUrl} 
              alt={video.title} 
              className="h-14 w-24 rounded-md object-cover flex-shrink-0" 
            />
            <div className="flex flex-1 flex-col gap-1 min-w-0">
              <p className={`text-xs font-semibold line-clamp-2 ${
                video.id === activeId
                  ? 'text-brand-700'
                  : 'text-light-primary'
              }`}>{video.title}</p>
              <span className="text-xs text-light-tertiary">{video.duration || 'YouTube'}</span>
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
        ))}
      </div>
    </div>
  );
};

export default RelatedVideoList;
