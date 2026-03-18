import { Suspense } from "react";
import Dashboard from "./components/Dashboard";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";

export default function Home() {
  const messagePromise = Promise.resolve("Welcome to the RSC Testing Demo!");
  const userPromise = Promise.resolve({
    name: "Aurora Scharff",
    email: "aurora@example.com",
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-12 bg-white px-16 py-32 dark:bg-black">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          RSC Testing Demo
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          This app demonstrates components that break with default RTL{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
            render()
          </code>{" "}
          but work with{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
            renderAsync()
          </code>{" "}
          from the forked React Testing Library.
        </p>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-medium text-black dark:text-zinc-100">
            Async Server Component
          </h2>
          <Suspense fallback={<p>Loading greeting...</p>}>
            <Greeting messagePromise={messagePromise} />
          </Suspense>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-medium text-black dark:text-zinc-100">
            Client Component with use()
          </h2>
          <UserCard userPromise={userPromise} />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-medium text-black dark:text-zinc-100">
            Nested Async Server Components
          </h2>
          <Suspense fallback={<p>Loading dashboard...</p>}>
            <Dashboard />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
