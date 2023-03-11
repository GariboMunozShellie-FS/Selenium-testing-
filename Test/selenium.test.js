require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver')

//driver
//  .get('http://www.google.com/ncr')
//  .then((_) =>
//    driver.findElement(By.name('q')).sendKeys('nicholas cage', Key.RETURN)
//  )
//  .then((_) => driver.wait(until.titleIs('nicholas cage - Google Search'), 1000))
//  .then((_) => driver.quit())

  describe('', () => {
    let driver;
    
      beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build()
        await driver.manage().window().maximize();
      });

      afterAll(async () => {
        await driver.quit();
      })

    const setDelay = async () => {
      await driver.sleep(1000)
    }

      it("Open site Home", async () => {
        await driver.get('http://localhost:3000/');
        await driver.getTitle().then(title => {
          expect(title).toEqual("Home")
        });
        setDelay()
      })

      it("Open site Contact Us", async () => {
        await driver.get(driver.getCurrentUrl());
        await driver.findElement(By.id("contactLink")).click();
        await driver.getTitle().then(title => {
          expect(title).toEqual("Contact Us")
        });
        setDelay()
      })

      it("Check message upon email submission", async () => {
        await driver.get(driver.getCurrentUrl());
        const email = await driver.findElement(By.id("formInput"));
        await email.sendKeys('test@email.com')
        await driver.findElement(By.id("formSubmit")).click();
        const message = await driver.findElement(By.id("formMessage")).getText();
        expect(message).toEqual("More info coming to " + "test@email.com")
        setDelay()
      })
  });