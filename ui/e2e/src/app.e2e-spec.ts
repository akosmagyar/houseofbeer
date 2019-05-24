import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();

  });

  it('click on the expansion stuff', () => {

  });

  it('click the carachters', ()=> {
	  page.openPage();
	  setTimeout(()=> {
		page.clickReadyingPlayers();
	}, 5000);
  });
});
