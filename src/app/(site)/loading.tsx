export default function SiteLoading() {
  return (
    <section className="paper-texture py-24">
      <div className="mx-auto max-w-3xl px-6 animate-pulse">
        <div className="h-4 w-24 bg-paper-line mb-6" />
        <div className="h-10 w-3/4 bg-paper-line mb-4" />
        <div className="h-4 w-2/3 bg-paper-line mb-10" />
        <div className="space-y-3">
          <div className="h-4 w-full bg-paper-line" />
          <div className="h-4 w-11/12 bg-paper-line" />
          <div className="h-4 w-10/12 bg-paper-line" />
          <div className="h-4 w-9/12 bg-paper-line" />
        </div>
      </div>
    </section>
  );
}
