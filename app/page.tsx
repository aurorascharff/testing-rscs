import { Suspense } from "react";
import AppShell from "./components/AppShell";
import ArticlePage from "./components/ArticlePage";
import Dashboard from "./components/Dashboard";
import Greeting from "./components/Greeting";
import SplitLayout from "./components/SplitLayout";
import PageHeader from "./components/PageHeader";
import ActivityFeed from "./components/ActivityFeed";
import TeamPage from "./components/TeamPage";
import UserCard from "./components/UserCard";
import UserProfile from "./components/UserProfile";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-16 font-sans">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-xl font-semibold tracking-tight text-zinc-100">
          renderAsync Demo
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          Testing async server components and client components with{" "}
          <code className="rounded bg-zinc-800 px-1 text-zinc-300">use()</code>{" "}
          via{" "}
          <code className="rounded bg-zinc-800 px-1 text-zinc-300">
            renderAsync
          </code>
          .
        </p>

        <div className="mt-10 space-y-8">
          <Section component="UserProfile" description="Async server component">
            <Suspense>
              <UserProfile />
            </Suspense>
          </Section>

          <Section
            component="Dashboard"
            description="Nested async server components (UserProfile + PostList)"
          >
            <Suspense>
              <Dashboard />
            </Suspense>
          </Section>

          <Section component="Greeting" description="Client component — use(Promise)">
            <Suspense>
              <Greeting
                messagePromise={Promise.resolve("Hello from a promise!")}
              />
            </Suspense>
          </Section>

          <Section
            component="UserCard"
            description="Client component — use(Promise) + Suspense"
          >
            <UserCard
              userPromise={Promise.resolve({
                name: "Alice",
                email: "alice@test.com",
              })}
            />
          </Section>

          <Section
            component="ArticlePage"
            description="Mixed tree — async RSC, sync server, client use(), client useState"
          >
            <Suspense>
              <ArticlePage />
            </Suspense>
          </Section>

          <Section
            component="TeamPage"
            description="Mixed tree — async RSC, context provider, use(context), client use()"
          >
            <Suspense>
              <TeamPage />
            </Suspense>
          </Section>

          <Section
            component="AppShell"
            description="Full app tree — async layout wrapping ArticlePage"
          >
            <Suspense>
              <AppShell>
                <Suspense>
                  <ArticlePage />
                </Suspense>
              </AppShell>
            </Suspense>
          </Section>

          <Section
            component="SplitLayout"
            description="Prop-walking — async RSCs passed as header and sidebar props"
          >
            <Suspense>
              <SplitLayout
                header={<PageHeader title="Articles" />}
                sidebar={<ActivityFeed />}
              >
                <p className="text-sm text-zinc-400">Main content area</p>
              </SplitLayout>
            </Suspense>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  component,
  description,
  children,
}: {
  component: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-2">
        <code className="text-sm text-zinc-200">{`<${component} />`}</code>
        <p className="text-xs text-zinc-500">{description}</p>
      </div>
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
        {children}
      </div>
    </section>
  );
}
