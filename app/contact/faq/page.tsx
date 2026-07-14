import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Synergia',
  description: 'Frequently asked questions about the Synergia project.',
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'How can I collaborate with the Synergia project?',
      answer:
        'We welcome collaborations from researchers, clinicians, and institutions. Please reach out to our project coordinator or the relevant institution contact to discuss partnership opportunities.',
    },
    {
      question: 'Can I visit the Ambisonics Laboratory?',
      answer:
        'External visits may be arranged subject to availability and research schedule. Please contact the project coordinator for details.',
    },
    {
      question: 'How do I submit my research for consideration?',
      answer:
        'If you have completed research relevant to Synergia research themes, contact us with publication details and we can evaluate it for inclusion in our research portfolio.',
    },
    {
      question: 'Where can I find more information about DFG funding?',
      answer:
        'Visit the Deutsche Forschungsgemeinschaft website at dfg.de for information about DFG programs, funding opportunities, and the Synergia funding scheme.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-academic-navy to-academic-blue text-white py-16">
        <div className="section-container">
          <h1 className="text-display mb-6">FAQ</h1>
          <p className="text-2xl text-blue-100">
            Common questions about the Synergia project.
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card p-6">
              <h2 className="font-bold text-academic-navy mb-3">{faq.question}</h2>
              <p className="text-academic-gray text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
