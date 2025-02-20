// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('null + null', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('null + null', async function() {
    await driver.get("http://[::1]:8000//")
    await driver.manage().window().setRect({ width: 550, height: 693 })
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.css("button:nth-child(2)")).click()
  })
})
