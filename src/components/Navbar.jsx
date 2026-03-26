import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Sync state if theme is changed externally (e.g. via floating toggle)
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const hasDarkClass = document.documentElement.classList.contains('dark')
          if (hasDarkClass !== isDark) {
            setIsDark(hasDarkClass)
          }
        }
      })
    })
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [isDark])

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Roadmap", id: "story" },
    { name: "Timeline", id: "experience" },
    { name: "Impact", id: "beyond" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <h2 className="text-xl font-black text-primary tracking-tighter uppercase italic">
        MS<span className="text-gray-400 font-light">.</span>
      </h2>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all text-[10px] font-black uppercase tracking-[0.15em] hover:scale-105 inline-block"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleDarkMode}
          className="text-gray-800 dark:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="text-gray-800 dark:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 dark:text-gray-200 focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden flex flex-col items-center py-4 transition-colors duration-300">
          <ul className="flex flex-col gap-4 font-medium text-center w-full">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <a
                  href={`#${link.id}`}
                  className="block cursor-pointer text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 py-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-semibold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;