async function fetchBreadcrumbs() {
  return ["Home", "Docs", "Current"];
}

export default async function PageHeader({ title }: { title: string }) {
  const breadcrumbs = await fetchBreadcrumbs();

  return (
    <div>
      <nav className="mb-1 text-xs text-zinc-500">
        {breadcrumbs.join(" / ")}
      </nav>
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}
