const https = require('https')
const fs = require('fs')
const path = require('path')

const screens = [
  { file: '/tmp/screens/01-landing.png',         url: 'https://mcp.figma.com/mcp/upload/9fce02e0-fcda-4660-b873-e6cfbc61b550/submit?scaleMode=FILL' },
  { file: '/tmp/screens/02-explore-all.png',     url: 'https://mcp.figma.com/mcp/upload/c4debc05-407f-4ebe-bfb9-4352b1c384d9/submit?scaleMode=FILL' },
  { file: '/tmp/screens/03-explore-shorts.png',  url: 'https://mcp.figma.com/mcp/upload/5a7d46cc-b2a6-418a-90ee-1bf41a7b973b/submit?scaleMode=FILL' },
  { file: '/tmp/screens/04-key-screen.png',      url: 'https://mcp.figma.com/mcp/upload/5294d7f7-e12e-4f33-9468-39285f5c0a4f/submit?scaleMode=FILL' },
  { file: '/tmp/screens/05-chat-welcome.png',    url: 'https://mcp.figma.com/mcp/upload/b16247db-eef1-4601-ad69-0b4722e52f51/submit?scaleMode=FILL' },
  { file: '/tmp/screens/06-command-palette.png', url: 'https://mcp.figma.com/mcp/upload/3657640e-e0e5-4b6a-ad39-37d33da2b408/submit?scaleMode=FILL' },
]

async function upload({ file, url }) {
  return new Promise((resolve, reject) => {
    const data = fs.readFileSync(file)
    const boundary = '----FormBoundary' + Math.random().toString(36).slice(2)
    const filename = path.basename(file)

    const header = Buffer.from(
      `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${filename}"\r\nContent-Type: image/png\r\n\r\n`
    )
    const footer = Buffer.from(`\r\n--${boundary}--\r\n`)
    const body   = Buffer.concat([header, data, footer])

    const u = new URL(url)
    const options = {
      hostname: u.hostname,
      path: u.pathname + u.search,
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': body.length,
      },
    }

    const req = https.request(options, res => {
      let resp = ''
      res.on('data', d => resp += d)
      res.on('end', () => {
        console.log(`${filename}: ${res.statusCode} ${resp.slice(0, 120)}`)
        resolve(resp)
      })
    })
    req.on('error', reject)
    req.write(body)
    req.end()
  })
}

;(async () => {
  for (const s of screens) {
    await upload(s)
  }
  console.log('\nAll uploads attempted.')
})()
