import { test, expect } from '@playwright/test';

// test('Login to Flexydial with valid credentials', async ({ page }) => {


test('Login', async ({ browser }) => {
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,});

  const page = await context.newPage();

  await page.goto('https://10.12.0.206/admin');

  // Maximize viewport (optional)
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Enter Username
  await page.locator('#username').fill('admin');

  // Enter Password
  await page.locator('#password').fill('flexydial');

  // Click Login button
  await page.locator('button[type="submit"]').click();

  // Wait for dashboard to load
  await page.waitForLoadState('networkidle');

  // Verify successful login
  await expect(page).toHaveURL(/dashboard/);

  // Verify dashboard element
  await expect(page.locator('text=Dashboard')).toBeVisible();
});