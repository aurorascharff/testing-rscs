async function fetchUser() {
  return { name: "Alice Johnson", role: "Engineer" };
}

export default async function UserProfile() {
  const user = await fetchUser();

  return (
    <div>
      <p className="text-sm font-medium">{user.name}</p>
      <p className="text-sm text-zinc-400">{user.role}</p>
    </div>
  );
}
