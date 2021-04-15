let url = "https://www.hackerrank.com/auth/login";
let { email, password } = require("../raw/pocs/secrets");
let fs = require("fs");
const puppeteer = require("puppeteer");
const { fstat } = require("node:fs");
let tab;
let browserPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
})
browserPromise
    .then(function (browser) {
        let tabsArrpromise = browser.pages();
        return tabsArrpromise
    })
    .then(function (tabArr) {
        tab = tabArr[0];
        let gotohackerrank = tab.goto(url);
        return gotohackerrank
    }).then(function () {
        let emailWillBeTypedPromise = tab.type("#input-1", email);
        return emailWillBeTypedPromise;
    })
    .then(function () {
        let passwordWillBeTypedPromise = tab.type("#input-2", password);
        return passwordWillBeTypedPromise;
    }).then(function () {
        let loginClick = tab.click("button[data-analytics = 'LoginPassword']");
        let combinedPromise = Promise.all([loginClick, tab.waitForNavigation({ waitUntil: "networkidle0" })]);
        return combinedPromise;
    }).then(function () {
        let interviewKitClick = tab.click("h3[title='Interview Preparation Kit']");
        let warmupchallengeelement =  tab.waitForSelector("a[data-attr1='warmup']",{visible:true});
        let combineinterviewkit = Promise.all([interviewKitClick,tab.waitForNavigation({ waitUntil: "networkidle0" }),warmupchallengeelement]);
        return combineinterviewkit;
    }).then(function () {
        let warmupchallenge = tab.click("a[data-attr1='warmup']");
        let questionelement = tab.waitForSelector("a[data-attr1='sock-merchant']",{visible:true});
        let combineinterviewkit = Promise.all([warmupchallenge,tab.waitForNavigation({ waitUntil: "networkidle0" }),questionelement])
        return combineinterviewkit;
    }).then(function(){
        let question1 = tab.click("a[data-attr1='sock-merchant']")
        let questionelement1 = tab.waitForSelector("a[data-attr1='sock-merchant']",{visible:true});
        let combilequestion = Promise.all([question1,tab.waitForNavigation,{waitUntil:"networkidle0"},questionelement1]);
        return combilequestion;
    
    }).then(function(){
        let questionsolver = questionSolver();
        return questionsolver;
    }).catch(function(){
        console.log(err);
    })
    function questionSolver(){
        return new Promise(function(resolve,reject){
            fs.readFile("")
        })
    }
    