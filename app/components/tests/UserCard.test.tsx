import { renderAsync, screen } from "@testing-library/react";
import UserCard from "../UserCard";

describe("UserCard", () => {
  it("should render the user card heading", async () => {
    const userPromise = Promise.resolve({
      name: "Aurora",
      email: "aurora@example.com",
    });

    await renderAsync(<UserCard userPromise={userPromise} />);

    expect(screen.getByText("User Card")).toBeInTheDocument();
  });

  it("should render the resolved user data", async () => {
    const userPromise = Promise.resolve({
      name: "Aurora",
      email: "aurora@example.com",
    });

    await renderAsync(<UserCard userPromise={userPromise} />);

    expect(screen.getByText("Aurora")).toBeInTheDocument();
    expect(screen.getByText("aurora@example.com")).toBeInTheDocument();
  });
});
