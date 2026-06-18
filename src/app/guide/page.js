export default function GuidePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Guide</h1>
      <p className="mt-3 max-w-2xl text-black/60 dark:text-white/60">
        This is a placeholder page. A full walkthrough on building and adding
        components will live here.
      </p>

      <ol className="mt-6 max-w-2xl list-inside list-decimal space-y-2 text-sm text-black/70 dark:text-white/70">
        <li>
          Create a file in{" "}
          <code className="font-mono">src/components/showcase/</code>.
        </li>
        <li>
          Register it in{" "}
          <code className="font-mono">src/components/showcase/registry.js</code>.
        </li>
        <li>It appears on the Showcase page automatically.</li>
      </ol>
    </main>
  );
}
