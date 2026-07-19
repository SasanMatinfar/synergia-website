export default function AmbisonicsLabVideo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`overflow-hidden bg-academic-navy ${compact ? 'border-t border-white/15' : 'rounded-xl shadow-sm'}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/infrastructure/sonification-ambisonics-laboratory.jpg"
        aria-label="Animated three-dimensional visualization of the Sonification and Ambisonics Laboratory"
        className={`w-full object-cover ${compact ? 'h-40 sm:h-44' : 'aspect-[2140/1306] h-auto'}`}
      >
        <source src="/videos/ambisonics-lab.webm" type="video/webm" />
        <source src="/videos/ambisonics-lab.mp4" type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    </div>
  );
}
