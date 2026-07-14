import { Metadata } from 'next';
import TeamPageClient from './TeamPageClient';

export const metadata: Metadata = {
  title: 'Team - Synergia',
  description:
    'Meet the researchers, clinicians, and collaborators behind the Synergia project.',
};

export default function TeamPage() {
  return <TeamPageClient />;
}
