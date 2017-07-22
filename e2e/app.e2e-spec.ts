import { Ng4DisplayBoardPage } from './app.po';

describe('ng4-display-board App', () => {
  let page: Ng4DisplayBoardPage;

  beforeEach(() => {
    page = new Ng4DisplayBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
