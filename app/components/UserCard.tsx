"use client";

import { use, Suspense } from "react";

type User = {
  name: string;
  email: string;
};

function UserDetails({ userPromise }: { userPromise: Promise<User> }) {
  const user = use(userPromise);

  return (
    <div>
      <p className="text-sm font-medium">{user.name}</p>
      <p className="text-sm text-zinc-400">{user.email}</p>
    </div>
  );
}

export default function UserCard({
  userPromise,
}: {
  userPromise: Promise<User>;
}) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-medium">User Card</p>
      <Suspense fallback={<p className="text-sm text-zinc-500">Loading user...</p>}>
        <UserDetails userPromise={userPromise} />
      </Suspense>
    </div>
  );
}
