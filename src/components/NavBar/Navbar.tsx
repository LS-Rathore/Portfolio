import { useState } from 'react';
import { useTheme } from '../Theme/ThemeProvider';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)] border-b-3 border-[var(--ink)] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[66px]">
        
        {/* Logo Badge - Moved further left, simplified to LSR_ */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="mono font-extrabold text-[18px] sm:text-[20px] bg-[var(--card)] border-3 border-[var(--ink)] px-[11px] py-0.5 box-shadow-sm text-[var(--ink)] no-underline hover:text-[var(--magenta)] transition-all flex items-center uppercase"
        >
          LSR_
        </a>

        {/* Right Section - Moved further right */}
        <div className="flex items-center gap-[24px]">
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-[24px] mono text-[13px] uppercase tracking-[0.04em] font-bold text-[var(--ink)]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="no-underline hover:text-[var(--magenta)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Theme Button Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="mono text-[12px] font-bold border-2 border-[var(--ink)] bg-[var(--card)] px-3 py-1.5 cursor-pointer shadow-[3px_3px_0px_0px_var(--ink)] text-[var(--ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all uppercase"
          >
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 border-2 border-[var(--ink)] bg-[var(--card)] text-[var(--ink)] shadow-[2px_2px_0px_0px_var(--ink)] cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-3 border-[var(--ink)] bg-[var(--card)] p-4 space-y-2 mono text-sm font-bold uppercase shadow-brutal">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block px-4 py-2 border-2 border-[var(--ink)] bg-[var(--bg)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
