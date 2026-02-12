import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video } from '../data/videos';
import { usePlayer } from '../context/PlayerContext';

const VideoCard = ({ video }: { video: Video }) => {
  const { setActiveVideo } = usePlayer();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Link
        to={`/player/${video.slug}`}
        onClick={() => setActiveVideo(video)}
        className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-premium-md transition-all duration-300 hover:shadow-premium-lg"
      >
        {/* Video Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-slate-100">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {/* Duration/Platform Badge */}
          {video.duration ? (
            <span className="absolute bottom-3 right-3 rounded-lg bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {video.duration}
            </span>
          ) : (
            <span className="absolute bottom-3 right-3 rounded-lg bg-brand-600/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              YouTube
            </span>
          )}
          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
            <motion.span
              className="text-3xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              ▶
            </motion.span>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-1 flex-col gap-3 px-4 py-4">
          <h3 className="text-sm font-semibold text-light-primary line-clamp-2 group-hover:text-brand-600 transition-colors">
            {video.title}
          </h3>
          <p className="text-xs text-light-tertiary line-clamp-2">{video.category}</p>
          
          {/* Category Badge */}
          <span className="mt-auto w-fit rounded-lg bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 transition-colors group-hover:bg-brand-100">
            {video.categorySlug}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default VideoCard;
