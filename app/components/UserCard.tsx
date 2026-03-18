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
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default function UserCard({
  userPromise,
}: {
  userPromise: Promise<User>;
}) {
  return (
    <div>
      <h1>User Card</h1>
      <Suspense fallback={<p>Loading user...</p>}>
        <UserDetails userPromise={userPromise} />
      </Suspense>
    </div>
  );
}
