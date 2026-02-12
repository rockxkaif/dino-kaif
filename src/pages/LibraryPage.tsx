import { motion } from 'framer-motion';
import { allVideos } from '../data/videos';
import VideoCard from '../components/VideoCard';

const LibraryPage = () => (
  <div className="space-y-8 pb-24 md:pb-8">
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-brand-600">❤️ Library</p>
      <h2 className="text-3xl font-bold text-light-primary">Recently Added</h2>
      <p className="text-base text-light-secondary">
        Discover the latest tutorials and demos across all categories.
      </p>
    </motion.header>

    <motion.div
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {allVideos.map((video) => (
        <motion.div
          key={video.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          <VideoCard video={video} />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default LibraryPage;
