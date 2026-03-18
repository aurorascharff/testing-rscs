import { renderAsync, screen } from "@testing-library/react";
import ActivityFeed from "../ActivityFeed";
import PageHeader from "../PageHeader";
import PostList from "../PostList";
import SplitLayout from "../SplitLayout";
import UserProfile from "../UserProfile";

describe("SplitLayout", () => {
  it("should resolve an async RSC passed as the header prop", async () => {
    await renderAsync(
      <SplitLayout
        header={<PageHeader title="Articles" />}
        sidebar={<p>Sidebar</p>}
      >
        <p>Main</p>
      </SplitLayout>,
    );

    expect(screen.getByText("Articles")).toBeInTheDocument();
    expect(screen.getByText("Home / Docs / Current")).toBeInTheDocument();
  });

  it("should resolve an async RSC passed as the sidebar prop", async () => {
    await renderAsync(
      <SplitLayout header={<p>Title</p>} sidebar={<ActivityFeed />}>
        <p>Main</p>
      </SplitLayout>,
    );

    expect(screen.getByText("Recent Activity")).toBeInTheDocument();
    expect(screen.getByText("Created item")).toBeInTheDocument();
    expect(screen.getByText("Updated settings")).toBeInTheDocument();
  });

  it("should resolve async RSCs in all three slots simultaneously", async () => {
    await renderAsync(
      <SplitLayout
        header={<PageHeader title="Dashboard" />}
        sidebar={<ActivityFeed />}
      >
        <UserProfile />
      </SplitLayout>,
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Home / Docs / Current")).toBeInTheDocument();

    expect(screen.getByText("Updated settings")).toBeInTheDocument();

    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
  });

  it("should resolve nested async RSCs inside a prop slot", async () => {
    await renderAsync(
      <SplitLayout
        header={<PageHeader title="Team" />}
        sidebar={
          <div>
            <ActivityFeed />
            <PostList />
          </div>
        }
      >
        <p>Content</p>
      </SplitLayout>,
    );

    expect(screen.getByText("Created item")).toBeInTheDocument();
    expect(screen.getByText("Getting Started")).toBeInTheDocument();
  });
});
