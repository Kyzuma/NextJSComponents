# Making Components

A tiny Next.js (App Router, JavaScript, Tailwind) playground for learning how React
components work. The home page renders a grid of example components, and adding your
own is a simple 2-step flow.

## Getting started

```bash
npm install   # already done if you scaffolded with create-next-app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    page.js          # main showcase page (renders the grid from the registry)
    layout.js        # root layout
    globals.css      # Tailwind
  components/
    ShowcaseCard.js  # card wrapper: title + description + the live component
    showcase/
      registry.js    # the ONE file you edit to add a component
      Button.js
      Counter.js     # built FROM the Button component
      Greeting.js    # takes a prop
      Card.js        # static presentational component
```

## How to add a component

1. Create a file in `src/components/showcase/`, e.g. `MyThing.js`:

   ```jsx
   export default function MyThing() {
     return <p>Hello from my component!</p>;
   }
   ```

   Add `"use client";` at the top if it uses state (`useState`) or click handlers.

2. Register it in `src/components/showcase/registry.js`:

   ```js
   import MyThing from "@/components/showcase/MyThing";

   export const showcase = [
     // ...existing entries
     { name: "MyThing", description: "What it does", Component: MyThing },
   ];
   ```

3. Save. It appears on the page automatically.

## The big idea

Components are made out of other components, all the way down to plain HTML tags
(`<div>`, `<button>`, `<p>`). For example, `Counter` is built from `Button`, and the
page itself is built from `ShowcaseCard`s. This app demonstrates the very concept it
is built on: composition and reuse.
