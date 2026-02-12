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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/70 backdrop-blur-md shadow-premium-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo - Now Clickable */}
          <button
            onClick={handleLogoClick}
            className="group flex flex-col gap-1 transition-all duration-200 hover:opacity-70"
            aria-label="Navigate to home"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 group-hover:text-brand-700 transition-colors">
              🦕 Dino Ventures
            </p>
            <h1 className="text-sm font-semibold text-light-primary group-hover:text-brand-600 transition-colors">
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
                  `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-100 text-brand-700 shadow-premium-sm'
                      : 'text-light-secondary hover:bg-slate-100 hover:text-light-primary'
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
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around border-t border-slate-200/60 bg-white/70 px-4 py-3 backdrop-blur-md md:hidden shadow-lg">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'text-brand-600'
                  : 'text-light-tertiary hover:text-brand-500'
              }`
            }
          >
            <span>
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
