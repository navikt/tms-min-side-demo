import matchers from "@testing-library/jest-dom/matchers";
import { afterAll, afterEach, beforeAll, expect } from "vitest";
import { cleanup, render } from "@testing-library/react";
import * as axeMatchers from "vitest-axe/matchers";
import { mswServer } from "mock/mswServer";
import { SWRConfig } from "swr";

expect.extend(matchers);
expect.extend(axeMatchers);

// @ts-expect-error mock for å fikse jsdom-feil i testene
HTMLCanvasElement.prototype.getContext = vi.fn();

beforeAll(() => {
  mswServer.listen({ onUnhandledRequest: "warn" });
});

afterEach(() => {
  mswServer.resetHandlers();
  cleanup();
});

afterAll(() => {
  mswServer.close();
});

const customRender = (children: React.ReactNode) =>
  render(<SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>);
export { customRender as render };
