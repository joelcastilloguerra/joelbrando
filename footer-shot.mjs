import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
await new Promise(r => setTimeout(r, 2000));

// Get footer absolute position
const footerPos = await page.$eval('footer', el => {
  const r = el.getBoundingClientRect();
  return {
    top: r.top + window.scrollY,
    height: r.height,
    width: r.width
  };
});

// Scroll footer into view
await page.evaluate((top) => window.scrollTo(0, top - 20), footerPos.top);
await new Promise(r => setTimeout(r, 400));

// BoundingClientRect is now relative to viewport
const box = await page.$eval('footer', el => {
  const r = el.getBoundingClientRect();
  return { x: r.x, y: r.y, width: r.width, height: r.height };
});

const dpr = 2;
await page.screenshot({
  path: 'temporary screenshots/footer-live2.png',
  clip: { x: box.x * dpr, y: box.y * dpr, width: box.width * dpr, height: box.height * dpr }
});
console.log('done', box);
await browser.close();
