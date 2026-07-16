import Link from 'next/link';

/**
 * Call to action section
 * Encourages collaboration and engagement
 */
export default function CallToAction() {
  return (
    <section className="section-container bg-gradient-to-r from-academic-blue to-academic-navy text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Join Our Research Ecosystem
        </h2>
        <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
          We welcome collaborations with researchers, clinicians, industry partners, and academic
          institutions interested in advancing multisensory surgical innovation.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about#contact" className="btn-primary bg-white text-academic-navy hover:bg-blue-50">
            Get in Touch
          </Link>
          <a
            href="https://www.dfg.de"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-10"
          >
            Learn About DFG Funding
          </a>
        </div>

        {/* Additional info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="font-bold mb-2">Research Collaboration</h3>
            <p className="text-sm text-blue-100">
              Partner with us on joint research projects and publications
            </p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl mb-2">🏫</div>
            <h3 className="font-bold mb-2">Academic Partnerships</h3>
            <p className="text-sm text-blue-100">
              Collaborate on doctoral training and research programs
            </p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl mb-2">🏥</div>
            <h3 className="font-bold mb-2">Clinical Engagement</h3>
            <p className="text-sm text-blue-100">
              Participate in surgical testing and clinical validation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
