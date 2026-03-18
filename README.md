# testing-rscs

Demo project for the [`renderAsync` PR](https://github.com/testing-library/react-testing-library/pull/XXXX) to React Testing Library — a first-class API for testing async React Server Components and components using React 19's `use()` API.

## Background

React 19's client-side renderer (`react-dom/client`) does not support `async function` components — they only work with the server renderer. This has been a [major pain point](https://github.com/testing-library/react-testing-library/issues/1209) for the community, forcing projects to either pin to a specific RC version of React (`19.0.0-rc-380f5d67-20241113`), write custom render helpers, or abandon unit testing RSCs in favor of E2E tests.

`renderAsync` solves this with a two-phase approach:

1. **Pre-resolution**: Recursively walks the JSX element tree, calls `async function` components with `await`, and replaces them with their resolved output before React ever sees them.
2. **Suspense + `act()`**: Wraps the resolved tree in a `<Suspense>` boundary and renders inside `await act(async () => ...)`, so components using `use(promise)` suspend and resolve correctly.

## What this repo demonstrates

This Next.js 16 app covers every component pattern that breaks with the standard `render()` and works with `renderAsync()`:

| Component | Type | Pattern |
|---|---|---|
| `UserProfile` | Async RSC | Simple `async function` with `await` |
| `PostList` | Async RSC | Async data fetching returning a list |
| `Dashboard` | Nested async RSC | Renders `UserProfile` and `PostList` as children |
| `Greeting` | Client with `use()` | Unwraps a `Promise<string>` via `use()` |
| `UserCard` | Client with `use()` + Suspense | Internal `<Suspense>` boundary around `use()` |

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
