const express = require('express'); // Adding Express
const app = express(); // Initializing Express
const puppeteer = require('puppeteer'); // Adding Puppeteer

    app.get('/api', function(req, res) {

    // Launching puppeteer
    puppeteer.launch({executablePath: '/opt/render/.cache/puppeteer/chrome/linux-1108766'}, args: ['--no-sandbox']).then(async function(browser) {
        const page = await browser.newPage();

        await page.goto(req.query.url, { waitUntil: 'networkidle0' })

        const html = await page.content();

        res.send({
            success: html
        });

        await browser.close();
    });
});

// Making Express listen on port 7000
app.listen(7000, function() {
    console.log('Running on port 7000.');
});
