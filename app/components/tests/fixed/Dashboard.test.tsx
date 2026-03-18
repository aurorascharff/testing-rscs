import { renderAsync, screen } from "@testing-library/react";
import Dashboard from "../../Dashboard";

describe("Dashboard (fixed - renderAsync)", () => {
  it("should render the dashboard heading", async () => {
    await renderAsync(<Dashboard />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("should render nested async UserProfile", async () => {
    await renderAsync(<Dashboard />);

    expect(screen.getByText("Aurora Scharff")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
  });

  it("should render nested async PostList", async () => {
    await renderAsync(<Dashboard />);

    expect(screen.getByText("Testing RSCs")).toBeInTheDocument();
    expect(screen.getByText("React 19 Features")).toBeInTheDocument();
    expect(
      screen.getByText("Server Components Deep Dive"),
    ).toBeInTheDocument();
  });
});
