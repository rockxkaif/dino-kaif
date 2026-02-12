import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video } from '../data/videos';
import { usePlayer } from '../context/PlayerContext';

const VideoCard = ({ video }: { video: Video }) => {
  const { setActiveVideo } = usePlayer();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 500, damping: 15 }}
    >
      <Link
        to={`/player/${video.slug}`}
        onClick={() => setActiveVideo(video)}
        className="group relative flex flex-col overflow-hidden rounded-xl border border-brand-100/40 bg-white shadow-premium-md transition-all duration-300 hover:shadow-premium-lg hover:border-brand-200/60 active:scale-e-98"
      >
        {/* Video Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="h-full w-full object-cover transition duration-400 group-hover:scale-110"
            loading="lazy"
          />
          {/* Duration/Platform Badge */}
          {video.duration ? (
            <span className="absolute bottom-3 right-3 rounded-lg bg-slate-950/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-premium-md transition-all duration-300 group-hover:bg-slate-950/85">
              {video.duration}
            </span>
          ) : (
            <span className="absolute bottom-3 right-3 rounded-lg bg-brand-600/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-premium-md transition-all duration-300 group-hover:bg-brand-600/95">
              YouTube
            </span>
          )}
          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
            <motion.span
              className="text-4xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={{ scale: 0.6 }}
              whileHover={{ scale: 1.15 }}
            >
              ▶
            </motion.span>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-1 flex-col gap-3 px-4 py-4">
          <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 group-hover:text-brand-600 transition-colors duration-300">
            {video.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2">{video.category}</p>
          
          {/* Category Badge */}
          <span className="mt-auto w-fit rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 transition-all duration-300 group-hover:bg-brand-100 group-hover:text-brand-700 group-hover:shadow-premium-sm">
            {video.categorySlug}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default VideoCard;
