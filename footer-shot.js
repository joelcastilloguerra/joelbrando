const puppeteer = require('C:/Users/nateh/AppData/Local/Temp/puppeteer-test/node_modules/puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Users/nateh/.cache/puppeteer/chrome/win64-133.0.6943.53/chrome-win64/chrome.exe',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 15000 });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 1000));

  const footerEl = await page.$('footer');
  const box = await footerEl.boundingBox();
  await page.screenshot({
    path: 'temporary screenshots/footer-live2.png',
    clip: { x: box.x, y: box.y, width: box.width, height: box.height }
  });
  console.log('done', box);
  await browser.close();
})();
