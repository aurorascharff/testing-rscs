# testing-rscs

Demo project for the [`renderAsync` PR (#1444)](https://github.com/testing-library/react-testing-library/pull/1444) to React Testing Library — a first-class API for testing async React Server Components and components using React 19's `use()` API.

## What this repo demonstrates

A Next.js 16 app with 35 tests covering `renderAsync` across every combination of server/client, async/sync, and `use()`/no-`use()`:

| Component | Type | Pattern |
|---|---|---|
| `UserProfile` | Async server | `async function` with `await` |
| `PostList` | Async server | Async data fetch returning a list |
| `Dashboard` | Async server | Nested async server components as children |
| `Badge` | Sync server | Plain function component, no async, no hooks |
| `Greeting` | Client + `use()` | Unwraps a `Promise<string>` via `use()` |
| `UserCard` | Client + `use()` + Suspense | `use(promise)` inside a `<Suspense>` boundary |
| `CommentList` | Client + `use()` | `use()` to resolve a promise |
| `StatusIndicator` | Client + `useState` | Stateful client component with click interaction |
| `NotificationFeed` | Client + `use()` + `useState` | Resolves data via `use()`, then filters with local state |
| `ThemeProvider` / `ThemedHeading` | Client + context + `use()` | `use(Context)` to consume a React context |
| `ArticlePage` | Mixed tree | Async RSC → async RSC child + sync server + client `useState` + client `use()` |
| `TeamPage` | Mixed tree | Async RSC → context provider + `use(context)` + async RSC → sync wrapper → client `use(promise)` |
| `AppShell` | Full app tree | Async layout → sync components → client `use()` sidebar → children slot with nested `ArticlePage` |
| `SplitLayout` | Prop slots | Sync wrapper receiving async RSCs via named props (`header`, `sidebar`), not just `children` |
| `PageHeader` | Async server | Async RSC passed as a non-children prop to `SplitLayout` |
| `ActivityFeed` | Async server | Async RSC passed as `sidebar` prop, also tested as sibling with other async RSCs in a prop slot |

Tests also cover user interactions (click filtering, toggle), async rerender, switching between component types, and async components passed as non-children props.

## Usage

```tsx
import { renderAsync, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";

it("renders nested async server components", async () => {
  await renderAsync(<Dashboard />);

  expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
});
```

## Setup

The RTL fork with `renderAsync` is included as a committed tarball (`testing-library-react.tgz`), so no extra steps are needed:

```bash
npm install
npm test
```

### Updating the RTL fork

To update the tarball after making changes to the fork:

```bash
cd /path/to/react-testing-library
npm run build && npm pack

cp testing-library-react-*.tgz /path/to/testing-rscs/testing-library-react.tgz
cd /path/to/testing-rscs
npm install
```
