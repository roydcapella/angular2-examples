import { LemontechPage } from './app.po';

describe('lemontech App', function() {
  let page: LemontechPage;

  beforeEach(() => {
    page = new LemontechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
