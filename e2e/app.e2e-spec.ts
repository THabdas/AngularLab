import { Ng2FlinstonesPage } from './app.po';

describe('ng2-flinstones App', () => {
  let page: Ng2FlinstonesPage;

  beforeEach(() => {
    page = new Ng2FlinstonesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
