import { renderAsync, screen } from "@testing-library/react";
import TeamPage from "../TeamPage";

describe("TeamPage", () => {
  it("should render the themed heading with context", async () => {
    await renderAsync(<TeamPage />);

    const heading = screen.getByText("Team Members");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("data-theme", "dark");
  });

  it("should render department sections from async data", async () => {
    await renderAsync(<TeamPage />);

    expect(screen.getByText("Engineering")).toBeInTheDocument();
    expect(screen.getByText("Research")).toBeInTheDocument();
  });

  it("should render team members via UserCard (use() + Suspense)", async () => {
    await renderAsync(<TeamPage />);

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("alice@test.com")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("bob@test.com")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
    expect(screen.getByText("charlie@test.com")).toBeInTheDocument();
  });

  it("should group members by department", async () => {
    await renderAsync(<TeamPage />);

    const engineering = screen.getByText("Engineering").closest("section")!;
    const research = screen.getByText("Research").closest("section")!;

    expect(engineering).toHaveTextContent("Alice");
    expect(engineering).toHaveTextContent("Bob");
    expect(engineering).not.toHaveTextContent("Charlie");

    expect(research).toHaveTextContent("Charlie");
    expect(research).not.toHaveTextContent("Alice");
  });
});
