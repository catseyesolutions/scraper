const express = require('express'); // Adding Express
    const app = express(); // Initializing Express
    const puppeteer = require('puppeteer'); // Adding Puppeteer

    // Wrapping the Puppeteer browser logic in a GET request
    app.get('/', function(req, res) {

        // Launching the Puppeteer controlled headless browser and navigate to the Digimon website
        puppeteer.launch().then(async function(browser) {
            const page = await browser.newPage();
            await page.goto('https://www.instagram.com/reel/CqXHeVwvRGx/?utm_source=ig_web_copy_link');

            // Closing the Puppeteer controlled headless browser
            await browser.close();
        });
    });

    // Making Express listen on port 7000
    app.listen(7000, function() {
      console.log('Running on port 7000.');
    });
