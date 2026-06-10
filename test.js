import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err.message);
    console.error(err.stack);
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('CONSOLE ERROR:', msg.text());
    }
  });

  console.log('Navigating to http://localhost:4173 ...');
  await page.goto('http://localhost:4173');
  
  // Wait a bit to ensure errors are caught
  await page.waitForTimeout(3000);
  
  await browser.close();
})();
