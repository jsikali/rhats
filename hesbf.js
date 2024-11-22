// head empty schedule brute force
// get all student schedules maybe by seeing all class rosters
// have another program to parse/find classes to 1 student given an id
// this just gets all the csvs though (or replaces (can figure htat out later))

//call w/ dir for the csvs and id, pass if getting stuck at login

const pptr = require('puppeteer');

const csv_dir = process.argv[2];
const uid = process.argv[3];
const pass = process.argv[4]; //... :(((
console.log(process.argv);
const url = "https://prodwebxe7-hv.rose-hulman.edu/regweb-cgi/reg-sched.pl";
// ^ NEED to be on rose hulman network
// else this requires my password
// hey github this is my password: ************

(async() => {
   const browser = await pptr.launch({headless: 'shell'});
   const page = await browser.newPage();
   await page.goto(url, {waitUntil: 'networkidle2'});

   //see if it loaded...
   await page.screenshot({path: "./page_has_loaded_hiii.png"});

   //some cope if login page is causing errors
   const signin_button = 'html body.cb div form#i0281.provide-min-height div.login-paginated-page div#lightboxTemplateContainer.provide-min-height div.outer div.template-section.main-section div.middle.ext-middle div.full-height div.flex-column div.win-scroll div#lightbox.sign-in-box.ext-sign-in-box.fade-in-lightbox div div div.pagination-view.animate.slide-in-next div div div.row div#tilesHolder.form-group div.tile-container div.row.tile div.table div.table-row div.table-cell.text-left.content';
   const pass_input = 'html body.cb div form#i0281.provide-min-height div.login-paginated-page div#lightboxTemplateContainer.provide-min-height div.outer div.template-section.main-section div.middle.ext-middle div.full-height div.flex-column div.win-scroll div#lightbox.sign-in-box.ext-sign-in-box.fade-in-lightbox div div div.pagination-view.animate.has-identity-banner.slide-in-next div div.row div.form-group.col-md-24 div.placeholderContainer input#i0118.form-control.input.ext-input.text-box.ext-text-box';
   
   //this makes the syntax errors disappear but this feels wrong
   //what the fish did i just write bro huhh
   //this is def causing an error but i need a cope bc login issues bruhhhhhh
   await page.click(signin_button).then(
      await page.click(pass_input),
      await page.type(pass_input, pass),
      await page.keyboard.press('Enter'),
      await page.screenshot({path: "./login_cope_complete.png"})
   ).else(
      await page.screenshot({path: "./no_login_cope_huh.png"})
   )

   //beyond this point all untested bc inc cope

   //put id, go class, see roster
   const uid_input = 'html body form table tbody tr td.bw80 input';
   const uid_button = 'html body form table tbody tr td.bw80 input';
   const class_button = 'html body p table tbody tr td a';

   await page.click(uid_input);
   await page.type(uid);
   await page.click(uid_button);

   //check if at page w/schedule then roster of first class
   await page.screenshot({path: "./on_schedule.png"});
   await page.click(class_button);
   await page.screenshot({path: "./on_roster.png"});

   const unhide = 'html body table tbody tr td.bw70 form input';
   //modify the html above (? docs not loading rn umm)
   //read in the course options (from a separate file) and loop through that, input into field
   //download csvs to the folder specified (could scaffold this w/docs..... erm)
   
})();