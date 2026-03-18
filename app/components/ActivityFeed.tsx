async function fetchActivity() {
  return [
    { id: 1, action: "Created item" },
    { id: 2, action: "Updated settings" },
    { id: 3, action: "Added comment" },
  ];
}

export default async function ActivityFeed() {
  const items = await fetchActivity();

  return (
    <div>
      <p className="mb-1 text-sm font-medium">Recent Activity</p>
      <ul className="space-y-0.5 text-sm text-zinc-400">
        {items.map((item) => (
          <li key={item.id}>{item.action}</li>
        ))}
      </ul>
    </div>
  );
}
