const scrape = require('./Script');
(async () => {
    const data = await scrape();
    console.log(data); // Do something with the scraped data
})()