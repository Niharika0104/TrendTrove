const puppeteer = require("puppeteer");

// Define the scrape function as a named async function
const scrape = async () => {
    const browser = await puppeteer.launch({ headless: false });
    // const browser = await puppeteer.connect({ browserWSEndpoint: 'wss://chrome.browserless.io?token=[ADD BROWSERLESS API TOKEN HERE]' })

    const page = await browser.newPage();
    await page.goto('https://www.libas.in');

    // Here, we inject some JavaScript into the page to build a list of results
    const items = await page.evaluate(() => {
        const elements = [...document.querySelectorAll('.athing .titleline a')];
        const results = elements.map((link) => ({
            title: link.textContent,
            href: link.href,
        }));
        return results; // No need to stringify here
    });

    console.log(items); // Log the items
   // await browser.close(); // Close the browser after scraping

    return items; // Return the items
};

// Export the scrape function as the default export
module.exports= scrape;
