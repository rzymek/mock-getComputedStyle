# mock-getComputedStyle

[![npm version](https://img.shields.io/npm/v/mock-getcomputedstyle.svg)](https://www.npmjs.com/package/mock-getcomputedstyle)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight utility to mock `window.getComputedStyle` - the biggest slowdown in React Testing Library (RTL) tests.

## Problem

When running tests with React Testing Library, calls to `window.getComputedStyle` can significantly slow down your test suite. This is especially noticeable in large test suites.

## Solution

This package provides a simple mock implementation of `window.getComputedStyle` that can be used in your test environment to improve performance.

## Installation
```bash
# npm
npm install --save-dev mock-getcomputedstyle
# yarn
yarn add --dev mock-getcomputedstyle
# pnpm
pnpm add -D mock-getcomputedstyle
```

## Usage with Vitest

Add to your Vitest setup file:
```typescript
// vitest.setup.ts or similar 
import 'mock-getcomputedstyle/vitest-setup';
```

Or configure it manually:

```typescript 
import { mockGetComputedStyle } from 'mock-getcomputedstyle';
// In your test setup beforeAll(() => { mockGetComputedStyle(); });
// Optional: Restore the original implementation after tests afterAll(() => { // If the package provides a restore function // restoreGetComputedStyle(); });
```
## Performance Improvements

Using this mock can significantly reduce test execution time:

- Typical RTL test suites may see 30-70% speed improvements
- The exact improvement depends on how many components are rendered in your tests

## License

MIT © [Krzysztof Rzymkowski](mailto:krzysztof.rzymkowski@gmail.com)