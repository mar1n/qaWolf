// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");
const { writeToPath} = require("fast-csv");

async function saveHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com");
  const listLenght = await page.locator(".titleline").all();
  const masterArray = []
  for(let i = 0; i<10; i++) {
    masterArray.push({news: await listLenght[i].textContent()});
  }
  writeToPath("./tenNews.csv", masterArray);
  console.log("Done, tenNews.csv file has been created.");
  process.exit();
}

(async () => {
    try {
        await saveHackerNewsArticles();
        
    } catch(err) {
        console.log("Error:", err);
    }
})();
