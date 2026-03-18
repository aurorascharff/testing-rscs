"use client";

import { use, useState, Suspense } from "react";

type Notification = {
  id: number;
  message: string;
  read: boolean;
};

function NotificationItem({ notification }: { notification: Notification }) {
  return (
    <li data-read={notification.read} className="text-sm">
      {notification.message}
    </li>
  );
}

function NotificationList({
  notificationsPromise,
}: {
  notificationsPromise: Promise<Notification[]>;
}) {
  const notifications = use(notificationsPromise);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const filtered =
    filter === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications;

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <button
          className="cursor-pointer rounded border border-zinc-700 bg-zinc-800 px-2 py-1 text-xs text-zinc-200 hover:bg-zinc-700"
          onClick={() => setFilter("all")}
        >
          All ({notifications.length})
        </button>
        <button
          className="cursor-pointer rounded border border-zinc-700 bg-zinc-800 px-2 py-1 text-xs text-zinc-200 hover:bg-zinc-700"
          onClick={() => setFilter("unread")}
        >
          Unread ({notifications.filter((n) => !n.read).length})
        </button>
      </div>
      <ul className="space-y-1">
        {filtered.map((n) => (
          <NotificationItem key={n.id} notification={n} />
        ))}
      </ul>
    </div>
  );
}

export default function NotificationFeed({
  notificationsPromise,
}: {
  notificationsPromise: Promise<Notification[]>;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">Notifications</p>
      <Suspense fallback={<p className="text-sm text-zinc-500">Loading notifications...</p>}>
        <NotificationList notificationsPromise={notificationsPromise} />
      </Suspense>
    </div>
  );
}
