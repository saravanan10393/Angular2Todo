import { Angual2TodoPage } from './app.po';

describe('angual2-todo App', function() {
  let page: Angual2TodoPage;

  beforeEach(() => {
    page = new Angual2TodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
