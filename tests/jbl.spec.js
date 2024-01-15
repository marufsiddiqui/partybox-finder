import { test, expect } from '@playwright/test';

test('Is bike available?', async ({ page }) => {
  await page.goto('https://de.jbl.com/bluetooth-lautsprecher/PARTYBOX310-.html');

  const pageData = await page.evaluate(() => {
    return window.pageData; // Assuming pageData is in the global scope
  });

  console.log('pageData:', pageData);

  const price = pageData.ecommerce.detail.products[0].price

  await expect(price).toBeLessThan(400)
});
