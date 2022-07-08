import React from "react";

interface Props {
  children: React.ReactNode;
  type?: "submit" | "button";
}

export default function Button({ type, children}: Props) {
  return (
    <button type={type}
    className="flex justify-center w-[340px] gap-5 border rounded-3xl p-2 m-6 bg-amber-600 text-neutral-50 mt-[40px] hover:bg-amber-500 transition-colors"
    >
      {children}
    </button>
  );
}