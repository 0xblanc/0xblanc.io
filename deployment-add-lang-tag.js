const args = process.argv.slice(2)
const fs = require('fs')

const pages = ['index', 'web2']

const getHtml = (source, target) => fs.readFileSync(`./${source}/${target}.html`, 'utf8').toString();

if (args[0] === 'en') {
  for (let page of pages) {
    let html = getHtml('docs', page)
    html = html.replaceAll('<html', '<html lang="en"')

    fs.writeFileSync(`./docs/${page}.html`, html)
  }
} else if (args[0] === 'zh-hk') {
  for (let page of pages) {
    let html = getHtml('out', page)
    html = html.replaceAll('<html', '<html lang="zh-HK"')

    fs.writeFileSync(`./out/${page}.html`, html)
  }
} else {
  console.log('Please input en or zh-hk')
  process.exit(1)
}
