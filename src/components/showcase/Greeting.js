export default function Greeting({ name = "developer" }) {
  return (
    <p className="text-lg">
      Hello, <span className="font-semibold text-blue-600 dark:text-blue-400">{name}</span> 👋
    </p>
  );
}
