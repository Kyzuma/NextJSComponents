export default function Cafes({
  // Default props
  bodyColor = "#800000",
  topColor = "#FFA500",
  title = "The Quiet Bean",
  body = "A cafe suitable as a workspace and for casual hangouts with friends.",
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