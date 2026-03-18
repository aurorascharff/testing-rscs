import { renderAsync, screen } from "@testing-library/react";
import UserCard from "../UserCard";

describe("UserCard", () => {
  it("should render the user card heading", async () => {
    const userPromise = Promise.resolve({
      name: "Alice",
      email: "alice@test.com",
    });

    await renderAsync(<UserCard userPromise={userPromise} />);

    expect(screen.getByText("User Card")).toBeInTheDocument();
  });

  it("should render the resolved user data", async () => {
    const userPromise = Promise.resolve({
      name: "Alice",
      email: "alice@test.com",
    });

    await renderAsync(<UserCard userPromise={userPromise} />);

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("alice@test.com")).toBeInTheDocument();
  });
});
