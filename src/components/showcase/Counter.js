"use client";

import { useState } from "react";
import Button from "@/components/showcase/Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-3xl font-bold tabular-nums">{count}</span>
      <div className="flex gap-2">
        <Button onClick={() => setCount((c) => c - 1)}>-</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
        <Button onClick={() => setCount((c) => c + 1)}>+</Button>
      </div>
    </div>
  );
}
