"use client";

import { useState } from "react";

export default function StatusIndicator({ status }: { status: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-1">
      <button
        className="cursor-pointer rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-zinc-200 hover:bg-zinc-700"
        onClick={() => setExpanded(!expanded)}
      >
        Status: {status}
      </button>
      {expanded && (
        <p className="text-sm text-zinc-400">
          The current status is: {status}
        </p>
      )}
    </div>
  );
}
