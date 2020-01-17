import { AfcWebsitePage } from './app.po';

describe('afc-website App', function() {
  let page: AfcWebsitePage;

  beforeEach(() => {
    page = new AfcWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
