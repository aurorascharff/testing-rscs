import { render, screen } from "@testing-library/react";
import Dashboard from "../../Dashboard";

describe("Dashboard (broken - default render)", () => {
  it("should render the dashboard with nested async components", async () => {
    // Nested async server components compound the problem.
    // Even if the outer component could render, inner async components fail.
    render(<Dashboard />);

    expect(await screen.findByText("Dashboard")).toBeInTheDocument();
    expect(
      await screen.findByText("Aurora Scharff"),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Testing RSCs"),
    ).toBeInTheDocument();
  });
});
