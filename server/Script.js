const puppeteer = require("puppeteer");
const CategorySchema=require("./models/Category");
// Define the scrape function as a named async function
const scrape = async () => {
    const browser = await puppeteer.launch({ headless: false });
    // const browser = await puppeteer.connect({ browserWSEndpoint: 'wss://chrome.browserless.io?token=[ADD BROWSERLESS API TOKEN HERE]' })

    const page = await browser.newPage();
    await page.goto('https://www.myntra.com/mens-sport-wear?rawQuery=mens%20sport%20wear',{ waitUntil: 'domcontentloaded' });
   await new Promise((resolve)=>{setTimeout(()=>{ resolve()},25000)})
   
    // Here, we inject some JavaScript into the page to build a list of results
    const items = await page.evaluate(() => {
        const elements = document.querySelectorAll('.product-base');
        const elementsArray = Array.from(elements);

       
        const results = elementsArray.map((link) => {
            // console.log('Link:', link);
            const image = link.querySelector(".product-imageSliderContainer img")?.getAttribute("src");
            // console.log('Images:', images);
             const splitImages = image?.trim() ;
            // console.log('Split Images:', splitImages);
            return {
                image: image??null,
                brand: link.querySelector(".product-brand")?.textContent,
                title: link.querySelector(".product-product")?.textContent,
                discountprice: link.querySelector(".product-price .product-discountedPrice")?.textContent,
                actualprice: link.querySelector(".product-price .product-strike")?.textContent,
                discountpercentage: link.querySelector(".product-price .product-discountPercentage")?.textContent?.split(' ')[0]?.slice(1, -1),
                total:20,
                available:10,
                ratings: Math.round((Math.random() * 5) * 10) / 10
            }
        });
        return results; // No need to stringify here
    });

   
    await browser.close(); 
    const data={
        category:"mens-sport-wear",
        subcategory:"Mens",
        list:items
    };
const cat=new CategorySchema(data);
console.log(cat);
await cat.save();

   return items;
};

// Export the scrape function as the default export
module.exports= scrape;
