import PostList from "./PostList";
import UserProfile from "./UserProfile";

export default async function Dashboard() {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">Dashboard</p>
      <UserProfile />
      <PostList />
    </div>
  );
}
