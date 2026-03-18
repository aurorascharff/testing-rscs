async function fetchPosts() {
  return [
    { id: 1, title: "Testing RSCs" },
    { id: 2, title: "React 19 Features" },
    { id: 3, title: "Server Components Deep Dive" },
  ];
}

export default async function PostList() {
  const posts = await fetchPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
