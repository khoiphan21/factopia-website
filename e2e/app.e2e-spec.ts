import { FactopiaWebsitePage } from './app.po';

describe('factopia-website App', function() {
  let page: FactopiaWebsitePage;

  beforeEach(() => {
    page = new FactopiaWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
