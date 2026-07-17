import Link from 'next/link';
import Image from 'next/image';
import { brandingAssets } from './branding';
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
            <Link href="/" className="mb-4 inline-flex items-center gap-3 text-white hover:text-blue-100">
              <Image
                src={brandingAssets.mark.src}
                width={brandingAssets.mark.width}
                height={brandingAssets.mark.height}
                alt="Synergia project logo"
                className="h-8 w-auto object-contain"
              />
              <span className="text-lg font-bold">Synergia Project</span>
            </Link>
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
                Technical University of Munich
                <br />
                TU Dresden
              </p>
              <p className="mt-4">
                <strong>Participating Units:</strong>
                <br />
                Chair for Computer Aided Medical Procedures
                <br />
                Junior Professorship in Social Affective Touch and CeTI
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <div className="mb-7">
            <a href="https://www.dfg.de" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <span className="rounded bg-white px-3 py-2">
                <img src="/logos/optimized/dfg-logo.png" alt="Deutsche Forschungsgemeinschaft" className="h-7 w-auto object-contain" />
              </span>
              <span className="text-sm text-gray-200">Funded by the Deutsche Forschungsgemeinschaft (DFG)</span>
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-200">
            <p>&copy; 2025–{currentYear} Synergia Project. All rights reserved.</p>
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
