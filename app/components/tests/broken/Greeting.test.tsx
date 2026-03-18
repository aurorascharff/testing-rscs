import { render, screen } from "@testing-library/react";
import Greeting from "../../Greeting";

describe("Greeting (broken - default render)", () => {
  it("should render the message from a promise", async () => {
    const messagePromise = Promise.resolve("Hello from the server!");

    // Client components using use() to unwrap promises will throw
    // without being wrapped in Suspense + act().
    render(<Greeting messagePromise={messagePromise} />);

    expect(
      await screen.findByText("Hello from the server!"),
    ).toBeInTheDocument();
  });
});
