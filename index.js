const express = require('express'); // Adding Express
const app = express(); // Initializing Express
const location = require('chrome-locate');
const puppeteer = require('puppeteer'); // Adding Puppeteer

    app.get('/api', async (req, res) => {

    console.log(location);

    // Launching puppeteer
    puppeteer.launch({executablePath: location, headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"]}).then(async function(browser) {
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
