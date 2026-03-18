import { renderAsync, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import ArticlePage from "../ArticlePage";

describe("ArticlePage", () => {
  it("should render the article title from the async header", async () => {
    await renderAsync(<ArticlePage />);

    expect(
      screen.getByText("Async Components in React"),
    ).toBeInTheDocument();
  });

  it("should render tags via sync Badge components", async () => {
    await renderAsync(<ArticlePage />);

    expect(screen.getByText("react")).toBeInTheDocument();
    expect(screen.getByText("async")).toBeInTheDocument();
    expect(screen.getByText("testing")).toBeInTheDocument();
  });

  it("should render the article body from a sync server component", async () => {
    await renderAsync(<ArticlePage />);

    expect(
      screen.getByText(
        "Components can be async functions that fetch data directly.",
      ),
    ).toBeInTheDocument();
  });

  it("should render the status from a stateful client component", async () => {
    await renderAsync(<ArticlePage />);

    expect(
      screen.getByRole("button", { name: "Status: published" }),
    ).toBeInTheDocument();
  });

  it("should toggle status details on click", async () => {
    await renderAsync(<ArticlePage />);
    const user = userEvent.setup();

    expect(
      screen.queryByText("The current status is: published"),
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Status: published" }),
    );

    expect(
      screen.getByText("The current status is: published"),
    ).toBeInTheDocument();
  });

  it("should render comments from use() promise", async () => {
    await renderAsync(<ArticlePage />);

    expect(screen.getByText("Comments")).toBeInTheDocument();
    expect(screen.getByText(/Helpful overview!/)).toBeInTheDocument();
    expect(screen.getByText(/Clear explanation/)).toBeInTheDocument();
  });

  it("should render comment authors", async () => {
    await renderAsync(<ArticlePage />);

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });
});
