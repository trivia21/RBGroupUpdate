import { EasyvenuePage } from './app.po';

describe('easyvenue App', () => {
  let page: EasyvenuePage;

  beforeEach(() => {
    page = new EasyvenuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
