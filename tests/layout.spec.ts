import { expect, test } from "@playwright/test";

test("main layout elements", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByTestId("logo")).toBeVisible();
  await expect(page.getByRole("link", { name: "Log In" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Welcome," })).toBeVisible();
  await expect(page.getByRole("link", { name: "View Dataset" })).toBeVisible();
});
