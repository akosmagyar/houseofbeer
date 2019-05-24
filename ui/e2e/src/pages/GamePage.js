export class GamePage {
  constructor() {
  }

  openPage() {
    browser.get('https://localhost:4200/game');
    browser.driver.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.waitForAngular();
  }


  clickTheX() {

  }

  getLogo() {
    let logo = element(by.css('.menu-item-text')).getText();
    return logo;
  }

  clickOnOurMenu() {
    //browser.manage().timeouts().implicitlyWait(10000);
    //element(by.css('.close')).click();
    element(by.cssContainingText('.dropdown-toggle', 'Our Menu')).click();

  }

  clickOnBurgers() {
    //browser.manage().timeouts().implicitlyWait(10000);
    //element(by.css('.close')).click();
    element(by.css('#mb1 > li.dropdown.menu-parent.open > ul > li > div > div > div.container-fluid.gutter > div > div.col-sm-5.col-md-5 > div > div > div:nth-child(1) > ul > li:nth-child(2) > a')).click();

  }


}
