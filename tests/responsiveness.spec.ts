import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5173';

test.describe('Check Responsiveness', () => {
  const pages = [
    { url: '/', selector: 'div.text-4xl', mobileFontSize: '36px', desktopFontSize: '72px' },
    { url: '/about', selector: 'h2:has-text("About Me")', mobileFontSize: '30px', desktopFontSize: '30px' },
    { url: '/projects', selector: 'div.text-4xl:has-text("Featured Projects")', mobileFontSize: '36px', desktopFontSize: '36px' },
  ];

  const viewports = [
    { width: 320, height: 480, size: 'mobile' },
    { width: 1280, height: 800, size: 'desktop' },
  ];

  pages.forEach(pageInfo => {
    test(`Page "${pageInfo.url}" is responsive`, async ({ page }) => {
      // Test mobile view
      await page.setViewportSize(viewports[0]);
      await page.goto(`${BASE_URL}${pageInfo.url}`);
      const mobileElement = await page.waitForSelector(pageInfo.selector);
      const mobileFontSize = await mobileElement.evaluate(el => getComputedStyle(el).fontSize);
      expect(mobileFontSize).toBe(pageInfo.mobileFontSize);

      // Test desktop view
      await page.setViewportSize(viewports[1]);
      await page.goto(`${BASE_URL}${pageInfo.url}`);
      const desktopElement = await page.waitForSelector(pageInfo.selector);
      const desktopFontSize = await desktopElement.evaluate(el => getComputedStyle(el).fontSize);
      expect(desktopFontSize).toBe(pageInfo.desktopFontSize);
    });
  });
});
