async function fetchUser() {
  return { name: "Aurora Scharff", role: "Developer" };
}

export default async function UserProfile() {
  const user = await fetchUser();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.role}</p>
    </div>
  );
}
