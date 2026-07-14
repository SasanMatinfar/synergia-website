'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * Main navigation header component
 * Provides site-wide navigation and branding
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/project', label: 'Project' },
    { href: '/research', label: 'Scientific Work' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and site title */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-transparent">
              <img src="/logos/synergia-logo.png" alt="Synergia" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-academic-navy">Synergia</h1>
              <p className="text-xs text-academic-gray">DFG Research Project</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-academic-gray hover:text-academic-blue hover:bg-academic-light rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-academic-gray hover:text-academic-blue hover:bg-academic-light focus:outline-none focus:ring-2 focus:ring-academic-blue"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`block h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-academic-gray hover:text-academic-blue hover:bg-academic-light rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
