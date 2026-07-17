'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { brandingAssets } from './branding';
import { siteNavigation } from './siteNavigation';

/**
 * Main navigation header component
 * Provides site-wide navigation and branding
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/' ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and site title */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src={brandingAssets.mark.src}
              width={brandingAssets.mark.width}
              height={brandingAssets.mark.height}
              alt="Synergia project logo"
              priority
              className="h-9 w-auto object-contain sm:h-11"
            />
            <div>
              <h1 className="text-lg font-bold text-academic-navy">Synergia</h1>
              <p className="hidden text-xs text-academic-gray sm:block">DFG Research Project</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex space-x-1">
            {siteNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'bg-academic-light text-academic-navy'
                    : 'text-academic-gray hover:text-academic-blue hover:bg-academic-light'
                }`}
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
            aria-controls="mobile-navigation"
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
          <div id="mobile-navigation" className="lg:hidden mt-4 space-y-2">
            {siteNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'bg-academic-light text-academic-navy'
                    : 'text-academic-gray hover:text-academic-blue hover:bg-academic-light'
                }`}
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
