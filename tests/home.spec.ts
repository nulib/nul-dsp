import { expect, test } from "@playwright/test";

import AxeBuilder from "@axe-core/playwright";

test.describe("homepage", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("homepage", () => {
  test("standard elements render", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Get Started" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Pair Me Up" })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Show Me" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Models" })).toBeVisible();

    await expect(
      page.getByRole("button", { name: "Use My Datasets" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Explore Open Datasets" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Explore NU Datasets" })
    ).toBeVisible();

    await expect(page.getByRole("button", { name: "Connect" })).toBeVisible();
  });
});
