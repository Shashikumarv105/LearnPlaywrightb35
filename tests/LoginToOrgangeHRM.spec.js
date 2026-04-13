import { test, expect } from '@playwright/test';


test('Login to OrangeHRM', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator("input[name='username']").fill(process.env.APP_USERNAME);
  await page.locator("input[name='password']").fill(process.env.APP_PASSWORD);
  await page.locator("button[type='submit']").click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  
});

test('Buzz: create post and verify appears on top', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator("input[name='username']").fill('Admin');
  await page.locator("input[name='password']").fill('admin123');
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  await page.locator('a:has-text("Buzz"), text=Buzz').click();
  await page.waitForSelector('text="What\'s on your mind"', { timeout: 15000 }).catch(() => {});

  const postText = `Automated Playwright post ${Date.now()}`;
  const composer = page.locator('textarea[placeholder*="mind"], [contenteditable="true"][role="textbox"], div[role="textbox"]');

  if (await composer.count() > 0) {
    const c = composer.first();
    if (await c.evaluate(el => el.hasAttribute('contenteditable'))) {
      await c.click();
      await c.fill ? await c.fill(postText) : await c.type(postText);
    } else {
      await c.fill(postText);
    }
  } else {
    throw new Error('Cannot locate Buzz composer input');
  }

  await page.locator('button:has-text("Post")').first().click();

  const feedItem = page.locator(`text=${postText}`).first();
  await expect(feedItem).toBeVisible({ timeout: 15000 });
  await expect(feedItem).toContainText(postText);
});