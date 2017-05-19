import { WyprawaPage } from './app.po';

describe('wyprawa App', () => {
  let page: WyprawaPage;

  beforeEach(() => {
    page = new WyprawaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
