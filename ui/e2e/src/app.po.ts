import {browser, by, element} from 'protractor';

export class AppPage {
  openPage() {
    browser.get('http://localhost:4200/game?name=A%20great%20name&story=Some%20story%20:)&level=1');
    browser.driver.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.waitForAngular();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  clickTheExpansionPanel(){
	  element(by.css('#brewingsName')).click();

  }
  clickReadMore(){
	  element(by.css('a#readMoreButton')).click();
  }
  clickReadyingPlayers(){
	  element(by.css('.experienceChip')).click();
  }

}
