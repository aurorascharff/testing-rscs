# testing-rscs

Demo project for the [`renderAsync` PR](https://github.com/testing-library/react-testing-library/pull/XXXX) to React Testing Library — a first-class API for testing async React Server Components and components using React 19's `use()` API.

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

```bash
npm install
npm test
```

### Installing the RTL fork locally

The fork is installed from a tarball to avoid the duplicate React instances problem that occurs with symlinked packages:

```bash
cd /path/to/react-testing-library
npm run build && npm pack

cd /path/to/testing-rscs
npm install /path/to/react-testing-library/testing-library-react-0.0.0-semantically-released.tgz
```

## Running tests

```bash
npm test            # single run
npm run test:watch  # watch mode
```
