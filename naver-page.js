exports.NaverPage = class NaverPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.pageUrl = "https://www.naver.com";
  }

  async goto() {
    await this.page.goto(this.pageUrl);
  }
};
