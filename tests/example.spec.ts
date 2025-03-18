import { ROProduct } from "@/app/types/ROProduct";
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  /* Get Testdata to validate changes */
  const response = await page.request.get(
    "http://localhost:3000/overview/api/compartments"
  );
  const testData: ROProduct[] = await response.json();
  const expectedQuantity: number = testData[0].quantity - 1;

  /* Go to Overview-Page */
  await page.goto("http://localhost:3000/overview");

  /* Check specific compartment-component */
  await expect(page.getByText("Toothpaste")).toBeVisible();

  await page.getByTestId("input-0").fill("1");

  await page.getByTestId("submit-0").click();

  await expect(page.getByTestId("quantity-0")).toContainText(
    `Qty: ${expectedQuantity}`
  );
});
