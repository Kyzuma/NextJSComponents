import ShowcaseCard from "@/components/ShowcaseCard";
import { showcase } from "@/components/showcase/registry";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Making Components</h1>
        <p className="mt-3 max-w-2xl text-black/60 dark:text-white/60">
          A playground for learning how components work. Each card below renders a
          real component from{" "}
          <code className="rounded bg-black/5 px-1.5 py-0.5 font-mono text-sm dark:bg-white/10">
            src/components/showcase/
          </code>
          . Components are made out of other components — all the way down to plain
          HTML tags.
        </p>
      </header>

      <section className="mb-12 rounded-xl border border-blue-600/20 bg-blue-50/50 p-6 dark:bg-blue-500/5">
        <h2 className="mb-3 text-lg font-semibold">Add your own component</h2>
        <ol className="list-inside list-decimal space-y-1 text-sm text-black/70 dark:text-white/70">
          <li>
            Create a file in{" "}
            <code className="font-mono">src/components/showcase/</code>, e.g.{" "}
            <code className="font-mono">MyThing.js</code>, with a default export.
          </li>
          <li>
            Import it in{" "}
            <code className="font-mono">src/components/showcase/registry.js</code> and
            add one entry to the <code className="font-mono">showcase</code> array.
          </li>
          <li>Save — it appears below automatically.</li>
        </ol>
        <p className="mt-3 text-xs text-black/50 dark:text-white/50">
          Tip: add <code className="font-mono">&quot;use client&quot;</code> at the top of
          the file if it uses state or click handlers.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {showcase.map(({ name, description, Component }) => (
          <ShowcaseCard key={name} name={name} description={description}>
            <Component />
          </ShowcaseCard>
        ))}
      </section>
    </main>
  );
}
