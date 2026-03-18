# testing-rscs

Demo project for the [`renderAsync` PR (#1444)](https://github.com/testing-library/react-testing-library/pull/1444) to React Testing Library — a first-class API for testing async React Server Components and components using React 19's `use()` API.

## What this repo demonstrates

A Next.js 16 app with tests covering `renderAsync` across all async component patterns:

| Component | Pattern |
|---|---|
| `UserProfile` | Async server component with `await` |
| `PostList` | Async server component returning a list |
| `Dashboard` | Nested async server components (`UserProfile` + `PostList` as children) |
| `Greeting` | Client component unwrapping a promise with `use()` |
| `UserCard` | Client component with `use()` inside a `<Suspense>` boundary |

Tests also cover async rerender and switching between component types.

## Usage

```tsx
import { renderAsync, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";

it("renders nested async server components", async () => {
  await renderAsync(<Dashboard />);

  expect(screen.getByText("Aurora Scharff")).toBeInTheDocument();
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

cp testing-library-react-0.0.0-semantically-released.tgz /path/to/testing-rscs/testing-library-react.tgz
cd /path/to/testing-rscs
npm install
```
