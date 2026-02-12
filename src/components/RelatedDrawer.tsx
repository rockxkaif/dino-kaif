import { useRef } from 'react';
import type React from 'react';
import RelatedVideoList from './RelatedVideoList';
import { Video } from '../data/videos';
import { motion } from 'framer-motion';

const RelatedDrawer = ({
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
  const touchStart = useRef<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStart.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null) return;
    const delta = event.touches[0].clientY - touchStart.current;
    if (delta < -40) {
      onToggle(true);
      touchStart.current = null;
    }
    if (delta > 40) {
      onToggle(false);
      touchStart.current = null;
    }
  };

  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/90 backdrop-blur-sm p-4 lg:hidden shadow-premium-md">
      <motion.button
        type="button"
        onClick={() => onToggle(!isOpen)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        whileHover={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
        whileTap={{ scale: 0.98 }}
        className="flex w-full items-center justify-between gap-4 rounded-lg border border-slate-200/60 bg-slate-50/70 px-4 py-3 text-left cursor-pointer transition-colors hover:bg-slate-100/80"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-brand-600">📺 Related Videos</p>
          <p className="text-sm font-semibold text-light-primary">Swipe up to see more</p>
        </div>
        <motion.span 
          className="text-lg text-brand-500"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, type: 'spring', stiffness: 400 }}
        >
          ⋀
        </motion.span>
      </motion.button>
      <motion.div
        initial={false}
        animate={{ maxHeight: isOpen ? '65vh' : '0px', opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="mt-4 max-h-[60vh] overflow-y-auto pr-2">
          <RelatedVideoList videos={videos} activeId={activeId} />
        </div>
      </motion.div>
    </div>
  );
};

export default RelatedDrawer;
