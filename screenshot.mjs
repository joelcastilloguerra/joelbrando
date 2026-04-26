import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotsDir = path.join(__dirname, 'temporary screenshots');

if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

// Find next available index
const existing = fs.readdirSync(screenshotsDir).filter(f => f.startsWith('screenshot-'));
const indices = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(n => !isNaN(n));
const nextIndex = indices.length ? Math.max(...indices) + 1 : 1;

const filename = label ? `screenshot-${nextIndex}-${label}.png` : `screenshot-${nextIndex}.png`;
const outputPath = path.join(screenshotsDir, filename);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
// Allow fonts, images and video to begin loading
await new Promise(r => setTimeout(r, 3000));

// Scroll through page to trigger intersection observers
await page.evaluate(async () => {
  await new Promise(resolve => {
    let pos = 0;
    const step = () => {
      pos += 400;
      window.scrollTo(0, pos);
      if (pos < document.body.scrollHeight) {
        requestAnimationFrame(step);
      } else {
        window.scrollTo(0, 0);
        resolve();
      }
    };
    step();
  });
});

// Wait for animations and fonts
await new Promise(r => setTimeout(r, 1800));

await page.screenshot({ path: outputPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${outputPath}`);
