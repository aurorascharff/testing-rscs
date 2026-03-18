import { render, screen } from "@testing-library/react";
import UserCard from "../../UserCard";

describe("UserCard (broken - default render)", () => {
  it("should render the user card with resolved data", async () => {
    const userPromise = Promise.resolve({
      name: "Aurora",
      email: "aurora@example.com",
    });

    // Even though UserCard has its own Suspense internally,
    // render() without act() won't properly resolve the promise.
    render(<UserCard userPromise={userPromise} />);

    expect(
      await screen.findByText("Aurora"),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("aurora@example.com"),
    ).toBeInTheDocument();
  });
});
