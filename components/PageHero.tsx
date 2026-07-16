export default function PageHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="bg-gradient-to-br from-academic-navy to-academic-blue text-white">
      <div className="section-container">
        <h1 className="text-display mb-5">{title}</h1>
        <p className="max-w-4xl text-xl md:text-2xl leading-relaxed text-blue-100">
          {description}
        </p>
      </div>
    </header>
  );
}
