export default function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-slate-400 bg-slate-50 p-5 text-sm text-academic-gray">
      <strong className="text-academic-navy">Content pending:</strong> {children}
    </div>
  );
}
