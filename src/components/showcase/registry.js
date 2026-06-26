// The single source of truth for the showcase page.
//
// To add your own component:
//   1. Create a file in this folder, e.g. `MyThing.js`, with a default export.
//   2. Import it below and add one entry to the `showcase` array.
//   3. Save — it shows up on the page automatically.

import Button from "@/components/showcase/Button";
import Counter from "@/components/showcase/Counter";
import Greeting from "@/components/showcase/Greeting";
import Card from "@/components/showcase/Card";
import DataList from "@/components/showcase/DataList";
import KyCard from "@/components/showcase/KyCard";
import CafesList from "@/components/showcase/CafesList";

export const showcase = [
  {
    name: "Button",
    description: "A reusable, clickable button.",
    Component: Button,
  },
  {
    name: "Counter",
    description: "Stateful component built FROM the Button component.",
    Component: Counter,
  },
  {
    name: "Greeting",
    description: "A component that takes a prop.",
    Component: () => <Greeting name="friend" />,
  },
  {
    name: "Card",
    description: "A static presentational component.",
    Component: Card,
  },
  {
    name: "KyCard",
    description: "Loops KyCard over an array of fruits with .map() (React's v-for).",
    Component: () => {
      const fruits = [
        { id: "banana", title: "Banana", bodyColor: "#fde047", topColor: "#a16207" },
        { id: "peach", title: "Peach", bodyColor: "#fca5a5", topColor: "#15803d" },
        { id: "grape", title: "Grape", bodyColor: "#c4b5fd", topColor: "#6d28d9" },
      ];
      return (
        <div className="flex flex-col gap-3">
          {fruits.map((fruit) => (
            <KyCard key={fruit.id} {...fruit} />
          ))}
        </div>
      );
    },
  },
  {
    name: "DataList",
    description: "Same component, two different lists passed in via the items prop.",
    Component: () => (
      <div className="flex w-full flex-col gap-4">
        <DataList />
        <DataList
          items={[
            { id: "🍌", name: "Banana", color: "bg-yellow-400 text-black" },
            { id: "🍎", name: "Apple", color: "bg-red-500 text-white" },
            { id: "🍇", name: "Grape", color: "bg-purple-500 text-white" },
          ]}
        />
      </div>
    ),
  },
{
    name: "CafesList",
    description: "Loops Cafes over an array of cafes with .map() (React's v-for).",
    Component: () => {
      const cafes = [
  { 
    id: "The Quiet Bean", 
    title: "The Quiet Bean", 
    bodyColor: "#fdb447", 
    topColor: "#a16207",
    body: "A cozy nook perfect for solo work sessions and slow mornings."
  },
  { 
    id: "Brew & Co", 
    title: "Brew & Co", 
    bodyColor: "#fccfa5", 
    topColor: "#8c6590",
    body: "Lively and social — great for catching up with friends over good coffee."
  },
  { 
    id: "Maple & Roast", 
    title: "Maple & Roast", 
    bodyColor: "#fdb5d5", 
    topColor: "#28d9c1",
    body: "Warm autumn vibes with seasonal blends and homemade pastries."
  },
  { 
    id: "Grid Coffee", 
    title: "Grid Coffee", 
    bodyColor: "#e3dd90", 
    topColor: "#639259",
    body: "Minimalist and focused — a go-to for developers and deep work."
  },
];
      return (
        <div className="flex flex-col gap-3">
          {cafes.map((cafe) => (
            <CafesList key={cafe.id} {...cafe} />
          ))}
        </div>
      );
    },
  },
];
