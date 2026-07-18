'use client';

import Link from 'next/link';
import { researchThemes } from '@/data/researchThemes';

/**
 * Research themes preview section
 * Shows cards for each major research area
 */
export default function ResearchThemesPreview() {
  const cardClassName = 'bg-slate-50 border border-slate-200 hover:border-academic-blue';

  return (
    <section className="section-container bg-academic-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 text-academic-navy">
          Project Structure
        </h2>
        <p className="text-center text-academic-gray mb-8 text-lg max-w-3xl mx-auto">
          The project is organized around a focused set of research directions that connect sensing, analysis, and translation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {researchThemes.filter((theme) => theme.kind === 'research-theme').map((theme) => (
            <Link key={theme.id} href={`/research#${theme.id}`}>
              <div
                className={`rounded-lg p-6 border transition-all hover:shadow-md cursor-pointer h-full ${cardClassName}`}
              >
                  <h3 className="text-lg font-semibold text-academic-navy mb-2">
                    {theme.title}
                  </h3>
                  <p className="text-sm text-academic-gray leading-relaxed">
                    {theme.description}
                  </p>
                </div>
            </Link>
          ))}
        </div>

        {/* CTA to full research page */}
        <div className="text-center">
          <Link href="/research" className="btn-primary">
            Explore the Full Structure
          </Link>
        </div>
      </div>
    </section>
  );
}
