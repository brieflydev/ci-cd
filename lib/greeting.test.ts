import { describe, expect, it } from "vitest";
import { formatBuildInfo, greet, pipelineStatus } from "./greeting";

describe("greet", () => {
  it("greets a named person", () => {
    expect(greet("Craftware")).toBe("Hello, Craftware!");
  });

  it("falls back when the name is empty", () => {
    expect(greet("   ")).toBe("Hello, workshop!");
  });
});

describe("pipelineStatus", () => {
  it("is green when checks pass", () => {
    expect(pipelineStatus(true)).toBe("green");
  });

  it("is red when checks fail", () => {
    expect(pipelineStatus(false)).toBe("red");
  });
});

describe("formatBuildInfo", () => {
  it("shows version and short commit sha", () => {
    expect(formatBuildInfo("0.1.0", "abcdef123456")).toBe("v0.1.0 · abcdef1");
  });
});
