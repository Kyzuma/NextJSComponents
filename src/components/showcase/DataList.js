const defaultItems = [
  { id: "js", name: "JavaScript", color: "bg-yellow-400 text-black" },
  { id: "ts", name: "TypeScript", color: "bg-blue-500 text-white" },
  { id: "py", name: "Python", color: "bg-green-500 text-white" },
  { id: "rs", name: "Rust", color: "bg-orange-500 text-white" },
  { id: "go", name: "Go", color: "bg-cyan-500 text-white" },
];

export default function DataList({ items = defaultItems }) {
  return (
    <ul className="flex w-full flex-col gap-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between rounded-lg border border-black/10 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/10"
        >
          <span className="text-sm font-medium">{item.name}</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold uppercase ${item.color}`}
          >
            {item.id}
          </span>
        </li>
      ))}
    </ul>
  );
}
