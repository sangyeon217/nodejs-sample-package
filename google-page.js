exports.GooglePage = class GooglePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.pageUrl = "https://www.google.com";
  }

  async goto() {
    await this.page.goto(this.pageUrl);
  }
};
