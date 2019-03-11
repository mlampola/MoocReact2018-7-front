const puppeteer = require('puppeteer')

describe('Blog app', () => {
  let page

  beforeEach(async () => {
    page = await puppeteer.newPage()
    await page.goto('http://localhost:3000')
  })


  it('renders login page', async () => {
    const textContent = await page.$eval('body', el => el.textContent)

    expect(textContent.includes('Log in')).toBe(true)
  })

})