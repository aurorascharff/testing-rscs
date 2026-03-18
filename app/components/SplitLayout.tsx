export default function SplitLayout({
  header,
  sidebar,
  children,
}: {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{header}</div>
      <div className="flex gap-4">
        <aside className="w-64 shrink-0">{sidebar}</aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
