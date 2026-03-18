export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300">
      {children}
    </span>
  );
}
