import { renderAsync, screen } from "@testing-library/react";
import AppShell from "../AppShell";
import ArticlePage from "../ArticlePage";

describe("AppShell", () => {
  it("should render the app name from async fetch", async () => {
    await renderAsync(
      <AppShell>
        <p>Page content</p>
      </AppShell>,
    );

    expect(screen.getByText("My App")).toBeInTheDocument();
  });

  it("should render navigation links", async () => {
    await renderAsync(
      <AppShell>
        <p>Page content</p>
      </AppShell>,
    );

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Settings" }),
    ).toBeInTheDocument();
  });

  it("should render sidebar notifications via use()", async () => {
    await renderAsync(
      <AppShell>
        <p>Page content</p>
      </AppShell>,
    );

    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Task assigned to you")).toBeInTheDocument();
    expect(screen.getByText("Review requested")).toBeInTheDocument();
  });

  it("should render children in the main area", async () => {
    await renderAsync(
      <AppShell>
        <p>Page content</p>
      </AppShell>,
    );

    expect(screen.getByText("Page content")).toBeInTheDocument();
  });

  it("should render the full app with ArticlePage as children", async () => {
    await renderAsync(
      <AppShell>
        <ArticlePage />
      </AppShell>,
    );

    expect(screen.getByText("My App")).toBeInTheDocument();

    expect(screen.getByText("Task assigned to you")).toBeInTheDocument();

    expect(
      screen.getByText("Async Components in React"),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Components can be async functions that fetch data directly.",
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Status: published" }),
    ).toBeInTheDocument();

    expect(screen.getByText(/Helpful overview!/)).toBeInTheDocument();
  });
});
