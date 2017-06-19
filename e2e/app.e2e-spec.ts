import { SampleGridPage } from './app.po';

describe('sample-grid App', () => {
  let page: SampleGridPage;

  beforeEach(() => {
    page = new SampleGridPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
