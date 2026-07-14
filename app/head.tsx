export default function Head() {
  return (
    <>
      {/* Prefer SVG (scales) and provide large PNG fallbacks for browsers that prefer raster */}
      <link rel="icon" href="/logos/synergia-logo.svg" type="image/svg+xml" />
      <link rel="icon" href="/logos/favicons/synergia-icon-512.png" sizes="512x512" />
      <link rel="shortcut icon" href="/logos/favicons/synergia-icon-256.png" />
      <link rel="apple-touch-icon" href="/logos/favicons/synergia-icon-180.png" sizes="180x180" />
      <link rel="mask-icon" href="/logos/synergia-logo.svg" color="#00264d" />
    </>
  );
}
