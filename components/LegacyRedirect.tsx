'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function LegacyRedirect({
  destination,
  label,
}: {
  destination: string;
  label: string;
}) {
  useEffect(() => {
    window.location.replace(destination);
  }, [destination]);

  return (
    <main className="section-container">
      <h1 className="text-heading-lg text-academic-navy mb-4">This page has moved</h1>
      <p className="text-academic-gray">
        Continue to{' '}
        <Link className="font-semibold text-academic-blue" href={destination}>
          {label}
        </Link>
        .
      </p>
    </main>
  );
}
