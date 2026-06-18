export default function KyCard({
  // Default props
  bodyColor = "#fde047",
  topColor = "#000000",
  title = "Banana",
  body = "A handwritten card with injectable colors.",
}) {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg shadow-sm" style={{ backgroundColor: bodyColor }}>
      <div className="h-2 w-full" style={{ backgroundColor: topColor }} />
      <div className="p-4">
        <h3 className="font-semibold text-black">{title}</h3>
        <p className="text-sm text-black/70">{body}</p>
      </div>
    </div>
  );
}
