import { renderAsync, screen } from "@testing-library/react";
import UserProfile from "../UserProfile";

describe("UserProfile", () => {
  it("should render the user name", async () => {
    await renderAsync(<UserProfile />);

    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
  });

  it("should render the user role", async () => {
    await renderAsync(<UserProfile />);

    expect(screen.getByText("Engineer")).toBeInTheDocument();
  });
});
