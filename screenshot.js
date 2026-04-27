const {chromium} = require('playwright');

async function takeScreenshot(){
    // i launched the chrome browser here
    const browser = await chromium.launch();

    // create a new page
    const page=await browser.newPage();

    await page.goto('https://www.google.com')
    
    await page.screenshot({path:'screenshot1.png'});
    // close the browser
    await browser.close;
}

takeScreenshot();