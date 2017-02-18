import { SpursPage } from './app.po';

describe('spurs App', function() {
  let page: SpursPage;

  beforeEach(() => {
    page = new SpursPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
