import { expect, test } from "@playwright/test";

test("home page elements", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("heading", { name: "Vector visualizations" })
  ).toBeVisible();
  await page.getByText("3-d ScatterplotsDemos of test").click();
});
