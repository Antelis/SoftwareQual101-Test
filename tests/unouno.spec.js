// Generated by Selenium IDE
/*
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

describe('1 + 1', function () {
  this.timeout(30000);
  let driver;
  let vars;

  // Create a screenshots directory if it doesn't exist
  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots');
  }

  beforeEach(async function() {
    const browser = process.env.BROWSER || 'chrome';
    if (browser === 'chrome') {
      const chrome = require('selenium-webdriver/chrome');
      const options = new chrome.Options();
      options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');
      driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    } else if (browser === 'firefox') {
      const firefox = require('selenium-webdriver/firefox');
      const options = new firefox.Options();
      options.addArguments('--headless');
      driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    }
    vars = {};
  });

  afterEach(async function () {
    if (driver) {
      // Take a screenshot of the result page
      const filename = this.currentTest.fullTitle()
        .replace(/['"]+/g, '')
        .replace(/[^a-z0-9]/gi, '_')
        .toLowerCase();
      const encodedString = await driver.takeScreenshot();
      await fs.writeFileSync(`./screenshots/${filename}.png`, encodedString, 'base64');

      // Close the browser
      await driver.quit();
    }
  });

  it('1 + 1', async function () {
    // Navigate to the application
    await driver.get('http://localhost:8000/');
    await driver.manage().window().setRect({ width: 550, height: 693 });

    // Enter 1 in the first input field
    await driver.findElement(By.id('num1')).click();
    await driver.findElement(By.id('num1')).sendKeys('1');
    console.log('Entered 1 in the first input field');

    // Enter 1 in the second input field
    await driver.findElement(By.id('num2')).click();
    await driver.findElement(By.id('num2')).sendKeys('1');
    console.log('Entered 1 in the second input field');

    // Click the addition button (assuming it's the first button)
    await driver.findElement(By.css('button:nth-child(1)')).click();
    console.log('Clicked the addition button');

    // Verify the result (assuming the result is displayed in an element with id 'result')
    const result = await driver.findElement(By.id('result')).getText();
    console.log('Result:', result);
    assert.strictEqual(result, '2', 'Expected 1 + 1 to equal 2');
  });
});
*/
