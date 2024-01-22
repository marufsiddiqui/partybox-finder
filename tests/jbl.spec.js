import { test, expect } from '@playwright/test';

test('Is price OK?', async ({ page }) => {
  await page.goto('https://de.jbl.com/bluetooth-lautsprecher/PARTYBOX310-.html');

  const pageData = await page.evaluate(() => {
    return window.pageData; // Assuming pageData is in the global scope
  });

  const price = pageData.ecommerce.detail.products[0].price
  console.log('Current Price:', price);

  await expect(price).toBeGreaterThan(401)
});
