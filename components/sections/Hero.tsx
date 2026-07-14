/**
 * Hero section for home page
 * Presents project title, vision, and main CTA
 */
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-academic-navy via-academic-blue to-academic-gray text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="relative section-container text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Synergia
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-blue-100">
            Multisensory research for high-stakes surgical environments
          </p>

          <p className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Multimodal sensing, intelligent feedback, and human perception are investigated to improve precision, awareness, and decision-making in surgical contexts.
          </p>

          <div className="flex justify-center">
            <a href="/project" className="btn-primary bg-white text-academic-navy hover:bg-blue-50">
              Explore the Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
