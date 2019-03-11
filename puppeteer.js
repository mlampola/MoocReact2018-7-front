const puppeteer = require('puppeteer')

const main = async () => {
  // const browser = await puppeteer.launch()
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250       // jokainen operaatio kestää nyt 0.25 sekuntia
  })
  const page = await browser.newPage()
  await page.goto('http://localhost:3000')
  await page.type('[name=username]', 'testaaja')
  await page.type('[name=password]', 'teppotestaaaa')
  await page.click('[name=submit]')
  await page.screenshot({ path: 'kuva.png' })

  await browser.close()
}

main()
