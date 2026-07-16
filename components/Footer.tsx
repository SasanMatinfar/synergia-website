import Link from 'next/link';
import { siteNavigation } from './siteNavigation';

/**
 * Site footer component
 * Includes contact info, quick links, and institutional credits
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-academic-navy to-academic-gray text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Synergia</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Synergia is a DFG-funded research project bridging AI analysis and human
              perception in high-intensity surgical environments through innovative
              multisensory integration.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-2 text-sm">
              {siteNavigation.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-200 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="text-sm text-gray-200 space-y-2">
              <p>
                <strong>Scientific Coordination:</strong>
                <br />
                Dr. Sasan Matinfar
                <br />
                <a href="mailto:sasan.matinfar@tum.de" className="hover:text-white transition-colors">
                  sasan.matinfar@tum.de
                </a>
              </p>
              <p className="mt-4">
                <strong>Lead Institutions:</strong>
                <br />
                TUM CAMP, TU Dresden CeTI
                <br />
                Department of Ophthalmology, Rechts der Isar Hospital, TUM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-200">
            <p>
              &copy; {currentYear} Synergia Project. All rights reserved. Funded by the{' '}
              <a href="https://www.dfg.de" className="hover:text-white transition-colors">
                Deutsche Forschungsgemeinschaft (DFG)
              </a>
              .
            </p>
            <div className="flex gap-4">
              <Link href="/about#legal" className="hover:text-white">Legal notice</Link>
              <Link href="/about#privacy" className="hover:text-white">Privacy</Link>
              <Link href="/about#accessibility" className="hover:text-white">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
