import { renderAsync, screen } from "@testing-library/react";
import Greeting from "../Greeting";

describe("Greeting", () => {
  it("should render the message from a resolved promise", async () => {
    const messagePromise = Promise.resolve("Hello from the server!");

    await renderAsync(<Greeting messagePromise={messagePromise} />);

    expect(screen.getByText("Hello from the server!")).toBeInTheDocument();
  });

  it("should render a different message", async () => {
    const messagePromise = Promise.resolve("Welcome back, Aurora!");

    await renderAsync(<Greeting messagePromise={messagePromise} />);

    expect(screen.getByText("Welcome back, Aurora!")).toBeInTheDocument();
  });
});
