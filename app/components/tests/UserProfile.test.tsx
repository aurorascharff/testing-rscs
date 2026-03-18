import { renderAsync, screen } from "@testing-library/react";
import UserProfile from "../UserProfile";

describe("UserProfile", () => {
  it("should render the user name", async () => {
    await renderAsync(<UserProfile />);

    expect(screen.getByText("Aurora Scharff")).toBeInTheDocument();
  });

  it("should render the user role", async () => {
    await renderAsync(<UserProfile />);

    expect(screen.getByText("Developer")).toBeInTheDocument();
  });
});
