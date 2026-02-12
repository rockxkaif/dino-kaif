import CategorySection from '../components/CategorySection';
import { categories } from '../data/videos';

const HomePage = () => (
  <div className="space-y-12 pb-24 md:pb-8">
    {/* Premium Hero Section */}
    <section className="animate-slide-up rounded-2xl border border-slate-200/60 bg-gradient-to-br from-brand-50 via-brand-25 to-slate-50 p-8 md:p-12 shadow-premium-md">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
          ✨ Video Feed
        </p>
        <h2 className="mt-4 text-3xl font-bold text-light-primary md:text-4xl">
          Discover AI-Powered Creator Tools
        </h2>
        <p className="mt-4 text-base leading-relaxed text-light-secondary">
          Browse by category, play videos in full-screen, and dock the mini-player while you explore. 
          Smooth, responsive interactions built for mobile-first experiences.
        </p>
        <div className="mt-6 flex gap-3">
          <div className="flex items-center gap-2 text-sm text-light-secondary">
            <span>🎬</span>
            <span>Smooth playback</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-light-secondary">
            <span>📱</span>
            <span>Mobile optimized</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-light-secondary">
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
