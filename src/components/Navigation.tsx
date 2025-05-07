import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import IconWrapper from './IconWrapper';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <header className="fixed w-full z-50 bg-black/80 border-b border-green-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-green-400 text-glow">DM</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-green-300 transition-colors ${
                  location.pathname === item.path ? 'text-green-300' : 'text-green-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-green-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IconWrapper>
              {isMenuOpen ? <X /> : <Menu />}
            </IconWrapper>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hover:text-green-300 transition-colors ${
                    location.pathname === item.path ? 'text-green-300' : 'text-green-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;