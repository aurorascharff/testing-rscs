import PostList from "./PostList";
import UserProfile from "./UserProfile";

export default async function Dashboard() {
  return (
    <section>
      <h1>Dashboard</h1>
      <UserProfile />
      <PostList />
    </section>
  );
}
