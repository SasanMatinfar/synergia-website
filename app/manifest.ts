import type { MetadataRoute } from 'next';
import { brandingAssets } from '@/components/branding';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Synergia Research Project',
    short_name: 'Synergia',
    description:
      'Multisensory integration for high-stakes surgical environments.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00264d',
    icons: [
      {
        src: brandingAssets.icons.app192,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: brandingAssets.icons.app512,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
