const puppeteer = require('./node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js')
const fs = require('fs')
const path = require('path')

fs.mkdirSync('/tmp/screens', { recursive: true })

;(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu']
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 })

  const shot = async (name, fn) => {
    await fn()
    await new Promise(r => setTimeout(r, 900))
    await page.screenshot({ path: `/tmp/screens/${name}.png` })
    console.log('✓', name)
  }

  // 1. Landing
  await shot('01-landing', async () => {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' })
  })

  // 2. Explore Festivals
  await shot('02-explore-all', async () => {
    const btns = await page.$$('button')
    for (const btn of btns) {
      const txt = await btn.evaluate(el => el.textContent.trim())
      if (txt.includes('Explore Festivals')) { await btn.click(); break }
    }
  })

  // 3. Explore filtered — Short
  await shot('03-explore-shorts', async () => {
    const btns = await page.$$('button')
    for (const btn of btns) {
      const txt = await btn.evaluate(el => el.textContent.trim())
      if (txt === 'Short') { await btn.click(); break }
    }
    await new Promise(r => setTimeout(r, 300))
  })

  // 4. Key Screen
  await shot('04-key-screen', async () => {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' })
    const btns = await page.$$('button')
    for (const btn of btns) {
      const txt = await btn.evaluate(el => el.textContent.trim())
      if (txt.includes('Talk with Laurel')) { await btn.click(); break }
    }
  })

  // 5. Chat welcome — bypass key with fake key
  await shot('05-chat-welcome', async () => {
    const input = await page.$('input[type="password"]')
    if (input) {
      await input.type('sk-ant-screenshot-placeholder-key')
      const btns = await page.$$('button')
      for (const btn of btns) {
        const txt = await btn.evaluate(el => el.textContent.trim())
        if (txt.includes('Begin Session')) { await btn.click(); break }
      }
      await new Promise(r => setTimeout(r, 800))
    }
  })

  // 6. Command palette
  await shot('06-command-palette', async () => {
    const ta = await page.$('textarea')
    if (ta) {
      await ta.click()
      await page.keyboard.type('/')
      await new Promise(r => setTimeout(r, 500))
    }
  })

  await browser.close()
  console.log('\nAll done.')
})()
