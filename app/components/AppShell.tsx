import { Suspense } from "react";
import NotificationFeed from "./NotificationFeed";

type Notification = {
  id: number;
  message: string;
  read: boolean;
};

async function fetchNotifications(): Promise<Notification[]> {
  return [
    { id: 1, message: "Task assigned to you", read: false },
    { id: 2, message: "Build completed", read: true },
    { id: 3, message: "Review requested", read: false },
  ];
}

async function fetchAppName(): Promise<string> {
  return "My App";
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return <aside>{children}</aside>;
}

function Header({ appName }: { appName: string }) {
  return (
    <header className="space-y-1">
      <p className="text-sm font-medium">{appName}</p>
      <nav className="flex gap-3 text-sm">
        <a href="/" className="text-blue-400 hover:underline">
          Home
        </a>
        <a href="/settings" className="text-blue-400 hover:underline">
          Settings
        </a>
      </nav>
    </header>
  );
}

export default async function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const appName = await fetchAppName();
  const notificationsPromise = fetchNotifications();

  return (
    <div className="space-y-3">
      <Header appName={appName} />
      <div className="flex gap-4">
        <Sidebar>
          <Suspense fallback={<p className="text-sm text-zinc-500">Loading notifications...</p>}>
            <NotificationFeed notificationsPromise={notificationsPromise} />
          </Suspense>
        </Sidebar>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
