import { CouplerPage } from './app.po';

describe('coupler App', () => {
  let page: CouplerPage;

  beforeEach(() => {
    page = new CouplerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
