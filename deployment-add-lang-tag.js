const args = process.argv.slice(2)
const fs = require('fs')

const getHtml = source => fs.readFileSync(`./${source}/index.html`, 'utf8').toString();

if (args[0] === 'en') {
  let html = getHtml('docs')
  html = html.replaceAll('<html', '<html lang="en"')

  fs.writeFileSync(`./docs/index.html`, html)
} else if (args[0] === 'zh-hk') {
  let html = getHtml('out')
  html = html.replaceAll('<html', '<html lang="zh-HK"')

  fs.writeFileSync(`./out/index.html`, html)
} else {
  console.log('Please input en or zh-HK')
  process.exit(1)
}
