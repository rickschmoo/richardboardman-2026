import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test("renders the core content and semantic landmarks", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /turn new technology into useful, inclusive systems/i,
      }),
    ).toBeVisible();

    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("main")).toHaveAttribute("id", "content");
    await expect(page.getByRole("contentinfo")).toBeVisible();
    await expect(page.getByRole("link", { name: "Skip to main content" })).toHaveAttribute(
      "href",
      "#content",
    );
  });

  test("connects primary navigation to page sections", async ({ page }) => {
    await page.goto("/");

    const expectedTargets = [
      ["Work", "#work"],
      ["Background", "#background"],
      ["Contact", "#contact"],
    ] as const;

    for (const [name, target] of expectedTargets) {
      await expect(page.getByRole("navigation").getByRole("link", { name })).toHaveAttribute(
        "href",
        target,
      );
      await expect(page.locator(target)).toBeVisible();
    }
  });

  test("renders expected outbound profile links", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "Connect on LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/richardboardman",
    );
    await expect(page.getByRole("link", { name: "View GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/rickschmoo",
    );
    await expect(page.getByRole("link", { name: "PhD thesis" })).toHaveAttribute(
      "href",
      "https://github.com/rickschmoo/phd-thesis-cross-tool-pim-2004",
    );
    await expect(page.getByRole("link", { name: "SF Star Wars Meetup" })).toHaveAttribute(
      "href",
      "https://www.meetup.com/SF-Star-Wars-Meetup/",
    );
    await expect(page.getByRole("link", { name: "source" })).toHaveAttribute(
      "href",
      "https://github.com/rickschmoo/richardboardman-2026",
    );
  });

  test("has no automatically detectable accessibility violations", async ({ page }) => {
    await page.goto("/");

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });
});
