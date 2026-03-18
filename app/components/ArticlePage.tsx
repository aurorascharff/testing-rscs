import { Suspense } from "react";
import Badge from "./Badge";
import CommentList from "./CommentList";
import StatusIndicator from "./StatusIndicator";

type Article = {
  title: string;
  body: string;
  status: string;
  tags: string[];
};

type Comment = {
  id: number;
  author: string;
  text: string;
};

async function fetchArticle(): Promise<Article> {
  return {
    title: "Async Components in React",
    body: "Components can be async functions that fetch data directly.",
    status: "published",
    tags: ["react", "async", "testing"],
  };
}

async function fetchComments(): Promise<Comment[]> {
  return [
    { id: 1, author: "Alice", text: "Helpful overview!" },
    { id: 2, author: "Bob", text: "Clear explanation." },
  ];
}

async function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className="space-y-1">
      <p className="text-sm font-medium">{article.title}</p>
      <div className="flex gap-1">
        {article.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </header>
  );
}

function ArticleBody({ body }: { body: string }) {
  return <p className="text-sm text-zinc-400">{body}</p>;
}

export default async function ArticlePage() {
  const article = await fetchArticle();
  const commentsPromise = fetchComments();

  return (
    <article className="space-y-3">
      <ArticleHeader article={article} />
      <ArticleBody body={article.body} />
      <StatusIndicator status={article.status} />
      <section className="space-y-1">
        <p className="text-sm font-medium">Comments</p>
        <Suspense fallback={<p className="text-sm text-zinc-500">Loading comments...</p>}>
          <CommentList commentsPromise={commentsPromise} />
        </Suspense>
      </section>
    </article>
  );
}
