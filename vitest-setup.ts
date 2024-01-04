import matchers from "@testing-library/jest-dom/matchers";
import { afterAll, afterEach, beforeAll, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import * as axeMatchers from "vitest-axe/matchers";
import { server } from "src/mocks/server";

expect.extend(matchers)
expect.extend(axeMatchers);

// @ts-expect-error mock for å fikse jsdom-feil i testene
HTMLCanvasElement.prototype.getContext = vi.fn();

beforeAll(() => {
  server.listen({ onUnhandledRequest: "warn" });
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});