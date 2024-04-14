// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { log } = require("console");
const { chromium, test } = require("playwright");


async function saveHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com");
  //const list = 
  for(const a of await page.locator(".titleline").all()) {
    log('a', await a.textContent())
  }
  //log("list", list);
}

(async () => {
  await saveHackerNewsArticles();
})();

