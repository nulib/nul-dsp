import { expect, test } from "@playwright/test";

test("main layout elements", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByTestId("logo")).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Data Sets" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
});
