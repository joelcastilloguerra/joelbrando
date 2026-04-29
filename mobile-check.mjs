import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 20000 });
await new Promise(r => setTimeout(r, 2500));

// Closed state
await page.screenshot({ path: 'temporary screenshots/mob-closed.png' });

// Open nav overlay
await page.evaluate(() => document.getElementById('nav-burger').click());
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: 'temporary screenshots/mob-open.png' });

console.log('done');
await browser.close();
