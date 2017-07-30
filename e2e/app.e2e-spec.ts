import { OaddinPage } from './app.po';

describe('oaddin App', () => {
  let page: OaddinPage;

  beforeEach(() => {
    page = new OaddinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
