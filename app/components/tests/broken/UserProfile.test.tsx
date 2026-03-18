import { render, screen } from "@testing-library/react";
import UserProfile from "../../UserProfile";

describe("UserProfile (broken - default render)", () => {
  it("should render the user name", async () => {
    // Default RTL render() cannot handle async server components.
    // This will throw: "Objects are not valid as a React child (found: [object Promise])"
    render(<UserProfile />);

    expect(
      await screen.findByText("Aurora Scharff"),
    ).toBeInTheDocument();
  });
});
