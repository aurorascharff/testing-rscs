import { renderAsync, screen } from "@testing-library/react";
import Greeting from "../../Greeting";
import UserProfile from "../../UserProfile";

describe("Rerender (fixed - renderAsync)", () => {
  it("should support async rerender with new props", async () => {
    const { rerender } = await renderAsync(
      <Greeting messagePromise={Promise.resolve("Hello!")} />,
    );

    expect(screen.getByText("Hello!")).toBeInTheDocument();

    await rerender(
      <Greeting messagePromise={Promise.resolve("Updated message!")} />,
    );

    expect(screen.getByText("Updated message!")).toBeInTheDocument();
  });

  it("should support rerendering from async RSC to different content", async () => {
    const { rerender } = await renderAsync(<UserProfile />);

    expect(screen.getByText("Aurora Scharff")).toBeInTheDocument();

    await rerender(
      <Greeting messagePromise={Promise.resolve("Switched component!")} />,
    );

    expect(screen.getByText("Switched component!")).toBeInTheDocument();
  });
});
