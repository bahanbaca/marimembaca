import { MarimembacaPage } from './app.po';

describe('marimembaca App', function() {
  let page: MarimembacaPage;

  beforeEach(() => {
    page = new MarimembacaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
