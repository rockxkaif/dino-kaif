import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data/videos';

const CategoriesPage = () => (
  <div className="space-y-8 pb-24 md:pb-8">
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-brand-600">📂 Browse</p>
      <h2 className="text-3xl font-bold text-light-primary">Categories</h2>
      <p className="text-base text-light-secondary">Explore curated AI video topics and tutorials.</p>
    </motion.header>

    <motion.div
      className="grid gap-5 md:grid-cols-2"
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {categories.map((category) => (
        <motion.div
          key={category.slug}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          whileHover={{ y: -4 }}
          className="rounded-lg border border-slate-200/60 bg-white shadow-premium-md p-6 transition-all duration-300 hover:shadow-premium-lg"
        >
          <div className="flex items-center gap-4">
            <motion.img
              src={category.iconUrl}
              alt={category.name}
              className="h-14 w-14 rounded-full border-2 border-brand-100 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            />
            <div>
              <h3 className="text-lg font-bold text-light-primary">{category.name}</h3>
              <p className="text-xs text-light-tertiary">{category.videos.length} videos</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-light-secondary leading-relaxed">
            Featured tutorials and quick demos focused on {category.name} workflows.
          </p>
          <Link
            to="/"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            View on home feed →
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default CategoriesPage;
