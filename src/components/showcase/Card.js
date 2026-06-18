export default function Card({
  title = "Card title",
  body = "This is a simple presentational card built from plain HTML tags.",
}) {
  return (
    <div className="w-full max-w-xs rounded-lg border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
      <h4 className="mb-1 font-semibold">{title}</h4>
      <p className="text-sm text-black/60 dark:text-white/60">{body}</p>
    </div>
  );
}
