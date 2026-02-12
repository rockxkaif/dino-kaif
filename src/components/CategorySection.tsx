import { motion } from 'framer-motion';
import { Category } from '../data/videos';
import VideoCard from './VideoCard';

const CategorySection = ({ category }: { category: Category }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true, margin: '-100px' }}
    className="space-y-5"
  >
    {/* Section Header */}
    <div className="flex items-center gap-4">
      <motion.img
        src={category.iconUrl}
        alt=""
        className="h-12 w-12 rounded-full border-2 border-brand-200 object-cover shadow-premium-md transition-all duration-300 hover:shadow-premium-lg"
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 500 }}
      />
      <div>
        <h2 className="text-xl font-bold text-slate-900">{category.name}</h2>
        <p className="text-sm text-slate-500">{category.videos.length} videos</p>
      </div>
    </div>

    {/* Video Grid */}
    <motion.div
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
          },
        },
      }}
    >
      {category.videos.map((video, idx) => (
        <motion.div
          key={video.id}
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
          }}
        >
          <VideoCard video={video} />
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

export default CategorySection;
