"use client";

export default function Button({ children = "Click me", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick ?? (() => alert("Clicked!"))}
      className="rounded-full bg-blue-600 px-5 py-2 font-medium text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
    >
      {children}
    </button>
  );
}
