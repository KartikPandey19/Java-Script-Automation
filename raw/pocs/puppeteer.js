let puppeteer = require("puppeteer");
let browserPromise = puppeteer.launch({ headless: false });
browserPromise
    .then(function (browser) {
        let newTabPromise = browser.newPage();
        return newTabPromise
    }).then(function (newTab) {
        gTab = newTab;
        let goToGooglePromise = newTab.goto("https://www.google.com");
        return goToGooglePromise

    }).then(function () {
        let textWillBeTypedPromise = gTab.type("input[aria-label='Search']", "pepcoding", { delay: 100 });
        return textWillBeTypedPromise

    }).then(function () {
        let enterWillBePressedPromise = gTab.keyboard.press("Enter");
        return  enterWillBePressedPromise
    }).then(function () {
        console.log("pepcoding searched")
    })