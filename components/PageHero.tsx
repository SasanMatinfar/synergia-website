export default function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="bg-gradient-to-br from-academic-navy to-academic-blue text-white">
      <div className={description ? 'section-container' : 'mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14 lg:px-8'}>
        <h1 className={`text-display ${description ? 'mb-5' : ''}`}>{title}</h1>
        {description && (
          <p className="max-w-4xl text-xl leading-relaxed text-blue-100 md:text-2xl">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
