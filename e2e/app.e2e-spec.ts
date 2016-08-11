import { PogobotGuiPage } from './app.po';

describe('pogobot-gui App', function() {
  let page: PogobotGuiPage;

  beforeEach(() => {
    page = new PogobotGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
