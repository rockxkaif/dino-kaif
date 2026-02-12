import { ReactNode } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import MiniPlayer from './MiniPlayer';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/categories', label: 'Categories' },
  { to: '/library', label: 'Library' },
];

const AppLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] via-[#F0F0FE] to-[#EEF2FF] text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-brand-200/30 bg-white/80 backdrop-blur-xl shadow-premium-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo - Now Clickable */}
          <button
            onClick={handleLogoClick}
            className="group flex flex-col gap-1 transition-all duration-300 hover:opacity-80 active:scale-95"
            aria-label="Navigate to home"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 group-hover:text-brand-700 transition-all duration-300">
              🦕 Dino Ventures
            </p>
            <h1 className="text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-all duration-300">
              Video Player
            </h1>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-100 text-brand-700 shadow-premium-sm hover:shadow-premium-md hover:bg-brand-150'
                      : 'text-slate-600 hover:text-brand-600 hover:bg-brand-50 active:scale-95'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main
        key={location.pathname}
        className="mx-auto w-full max-w-6xl px-4 py-8 animate-fade-in md:py-10"
      >
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around border-t border-brand-200/30 bg-white/80 px-4 py-4 backdrop-blur-xl md:hidden shadow-premium-lg">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1.5 text-xs font-semibold transition-all duration-300 rounded-lg px-3 py-2 ${
                isActive
                  ? 'text-brand-600 bg-brand-50'
                  : 'text-slate-500 hover:text-brand-600 hover:bg-brand-50 active:scale-95'
              }`
            }
          >
            <span className="text-base">
              {item.label === 'Home' && '🏠'}
              {item.label === 'Categories' && '📂'}
              {item.label === 'Library' && '❤️'}
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <MiniPlayer />
    </div>
  );
};

export default AppLayout;
