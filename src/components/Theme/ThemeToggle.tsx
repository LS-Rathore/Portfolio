import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2 border-3 border-foreground bg-card text-foreground shadow-[3px_3px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer font-mono text-xs font-bold flex items-center gap-1.5"
    >
      {theme === 'light' ? (
        <>
          <Moon className="size-4" />
          <span className="hidden sm:inline">DARK_MODE</span>
        </>
      ) : (
        <>
          <Sun className="size-4 text-amber-400" />
          <span className="hidden sm:inline">LIGHT_MODE</span>
        </>
      )}
    </button>
  );
}
