const {chromium} = require('playwright');

async function takeScreenshot(browser,ticker,interval,fileName){

    // create a new page
    const page=await browser.newPage();

    // set a size to a page
    await page.setViewportSize({width:1280, height:720});
    
    const url=`https://www.tradingview.com/chart/?symbol=${ticker}&interval=${interval}`;

    await page.goto(url,{waitUntil:'domcontentloaded'});
    await page.waitForSelector('.chart-markup-table',{state:'visible'})
    await page.screenshot({path:fileName});

    
}
async function run(){
    // i launched the chrome browser here
    const browser = await chromium.launch({headless:true});

    const symbl="Reliance";
    await takeScreenshot(browser,symbl,'D','daily.png');
    await takeScreenshot(browser,symbl,'W','weekly.png');
    await takeScreenshot(browser,symbl,'M','monthly.png');

    // close the browser
    await browser.close;
}

run().then(()=>{
    console.log("All tasks completed");
    process.exit(0);
}).catch((err)=>{
    console.error("Critical Error:",err);
    process.exit(1);
})