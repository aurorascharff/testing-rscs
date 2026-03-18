async function fetchPosts() {
  return [
    { id: 1, title: "Getting Started" },
    { id: 2, title: "Configuration Guide" },
    { id: 3, title: "Advanced Patterns" },
  ];
}

export default async function PostList() {
  const posts = await fetchPosts();

  return (
    <ul className="list-inside list-disc space-y-1 text-sm">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
