import CategorySection from '../components/CategorySection';
import { categories } from '../data/videos';

const HomePage = () => (
  <div className="space-y-12 pb-24 md:pb-8">
    {/* Premium Hero Section */}
    <section className="animate-slide-up rounded-2xl border border-brand-200/40 bg-gradient-to-br from-brand-50 via-white to-brand-50/50 p-8 md:p-12 shadow-premium-md hover:shadow-premium-lg transition-all duration-300">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
          ✨ Video Feed
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Discover AI-Powered Creator Tools
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Browse by category, play videos in full-screen, and dock the mini-player while you explore. 
          Smooth, responsive interactions built for mobile-first experiences.
        </p>
        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <div className="flex items-center gap-2 text-sm text-slate-600 px-3 py-2 rounded-lg bg-white/50 hover:bg-white transition-colors duration-300">
            <span>🎬</span>
            <span>Smooth playback</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 px-3 py-2 rounded-lg bg-white/50 hover:bg-white transition-colors duration-300">
            <span>📱</span>
            <span>Mobile optimized</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 px-3 py-2 rounded-lg bg-white/50 hover:bg-white transition-colors duration-300">
            <span>⚡</span>
            <span>Ultra-fast</span>
          </div>
        </div>
      </div>
    </section>

    {/* Category Sections */}
    {categories.map((category) => (
      <CategorySection key={category.slug} category={category} />
    ))}
  </div>
);

export default HomePage;
