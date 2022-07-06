const fs = require('fs');

const rxs = [
  /\/_next\/static\/chunks\/polyfills-(.*?).js/,
  /\/_next\/static\/chunks\/framework-(.*?).js/,
  /\/_next\/static\/chunks\/main-(.*?).js/,
  /\/_next\/static\/chunks\/polyfills-(.*?).js/,
  /\/_next\/static\/chunks\/webpack-(.*?).js/,
  /\/_next\/static\/chunks\/pages\/index-(.*?).js/,
  /\/_next\/static\/chunks\/pages\/_app-(.*?).js/,
  /\/_next\/static\/css\/(.*?).css/,
]

const getHtml = source => fs.readFileSync(`./${source}/index.html`, 'utf8');

const getDirCode = source => {
  const directories = fs.readdirSync(`${source}/_next/static`, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
  for (const dir of directories) {
    if (dir !== 'chunks' && dir !== 'css') {
      return dir
    }
  }
}

const getScripts = source => {
  const html = fs.readFileSync(`./${source}/index.html`, 'utf8');
  return rxs.map(rx => html.match(rx)[1])
}

const html = getHtml('docs');
const originalScripts = getScripts('docs')
const newScripts = getScripts('out')

const originalDirCode = getDirCode('docs')
const newDirCode = getDirCode('out')

for (let i = 0; i < originalScripts.length; i++) {
  html.replaceAll(newScripts[i], originalScripts[i])
}
html.replaceAll(newDirCode, originalDirCode)

fs.writeFileSync(`./out/index.html`, html)

