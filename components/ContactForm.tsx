'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, message } = formData;
    const subject = encodeURIComponent(
      `Synergia website inquiry from ${name || 'website visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${name || 'Not provided'}\nEmail: ${email || 'Not provided'}\n\nMessage:\n${message || ''}`
    );

    window.location.href = `mailto:sasan.matinfar@tum.de?subject=${subject}&body=${body}`;
    setStatus('Opening your email app…');
  };

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-academic-navy mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-academic-blue"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-academic-navy mb-2">
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-academic-blue"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-academic-navy mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-academic-blue"
          placeholder="Tell us about your inquiry..."
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full"
      >
        Send Message
      </button>

      {status ? (
        <p className="text-sm text-academic-gray">{status}</p>
      ) : null}
    </form>
  );
}
