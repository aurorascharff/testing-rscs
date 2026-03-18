import { renderAsync, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";

describe("Dashboard", () => {
  it("should render the dashboard heading", async () => {
    await renderAsync(<Dashboard />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("should render nested async UserProfile", async () => {
    await renderAsync(<Dashboard />);

    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    expect(screen.getByText("Engineer")).toBeInTheDocument();
  });

  it("should render nested async PostList", async () => {
    await renderAsync(<Dashboard />);

    expect(screen.getByText("Getting Started")).toBeInTheDocument();
    expect(screen.getByText("Configuration Guide")).toBeInTheDocument();
    expect(screen.getByText("Advanced Patterns")).toBeInTheDocument();
  });
});
