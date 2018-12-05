'use strict';

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
    timeout: 1000
  });
  const NUM = 10;
  const page = await browser.newPage();

  page.on('request', request => {
    if (request.resourceType === 'Script') {
      request.abort();
    } else {
      request.continue();
    }
  });

  let clickResult =  `div.wrapper`;
  await page.setViewport({ width: 1920, height: 1920 });
  await page.goto('https://weichiachang.github.io/broken-pieces/');
  for (let i = 0; i < NUM; i++) {
    page.click(clickResult);
    await page.screenshot({path: `./images/screenshot-${i+1}.png`, fullPage: true });
  }

  browser.close();

})();