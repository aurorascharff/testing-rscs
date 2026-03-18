"use client";

import { use } from "react";

type Comment = {
  id: number;
  author: string;
  text: string;
};

export default function CommentList({
  commentsPromise,
}: {
  commentsPromise: Promise<Comment[]>;
}) {
  const comments = use(commentsPromise);

  return (
    <ul className="space-y-1">
      {comments.map((comment) => (
        <li key={comment.id} className="text-sm">
          <span className="font-medium">{comment.author}</span>
          {": "}
          {comment.text}
        </li>
      ))}
    </ul>
  );
}
