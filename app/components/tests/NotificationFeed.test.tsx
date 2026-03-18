import { renderAsync, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import NotificationFeed from "../NotificationFeed";

describe("NotificationFeed", () => {
  const notifications = [
    { id: 1, message: "Task assigned to you", read: false },
    { id: 2, message: "Build completed", read: true },
    { id: 3, message: "Review requested", read: false },
  ];

  it("should render all notifications", async () => {
    await renderAsync(
      <NotificationFeed
        notificationsPromise={Promise.resolve(notifications)}
      />,
    );

    expect(screen.getByText("Task assigned to you")).toBeInTheDocument();
    expect(screen.getByText("Build completed")).toBeInTheDocument();
    expect(screen.getByText("Review requested")).toBeInTheDocument();
  });

  it("should show correct counts in filter buttons", async () => {
    await renderAsync(
      <NotificationFeed
        notificationsPromise={Promise.resolve(notifications)}
      />,
    );

    expect(
      screen.getByRole("button", { name: "All (3)" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Unread (2)" }),
    ).toBeInTheDocument();
  });

  it("should filter to unread on click", async () => {
    await renderAsync(
      <NotificationFeed
        notificationsPromise={Promise.resolve(notifications)}
      />,
    );
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "Unread (2)" }));

    expect(screen.getByText("Task assigned to you")).toBeInTheDocument();
    expect(screen.getByText("Review requested")).toBeInTheDocument();
    expect(
      screen.queryByText("Build completed"),
    ).not.toBeInTheDocument();
  });

  it("should switch back to all", async () => {
    await renderAsync(
      <NotificationFeed
        notificationsPromise={Promise.resolve(notifications)}
      />,
    );
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "Unread (2)" }));
    await user.click(screen.getByRole("button", { name: "All (3)" }));

    expect(screen.getByText("Build completed")).toBeInTheDocument();
  });
});
