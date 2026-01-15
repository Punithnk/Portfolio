import { test, expect } from '@playwright/test';

test('hero should match snapshot', async ({ page }) => {
  await page.goto('/');
  const header = page.locator('header');
  await expect(header).toHaveScreenshot('hero.png', { animations: 'disabled' });
});

test('projects section should match snapshot', async ({ page }) => {
  await page.goto('/');
  const projects = page.locator('#projects');
  await expect(projects).toHaveScreenshot('projects.png', { animations: 'disabled' });
});