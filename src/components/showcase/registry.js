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
import Map from "@/app/map/components/Map";

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
    name: "Map",
    description: "Displays an interactive Google Map.",
    Component: Map,
  },
];
