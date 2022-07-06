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

const getHtml = source => fs.readFileSync(`./${source}/index.html`, 'utf8').toString();

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

const getfiles = (source, suffix) => {
  const directories = fs.readdirSync(`${source}/_next/static${suffix}`, (err, files) => {
    return files.filter(file => file.endsWith('.js') || file.endsWith('.css'))
  })
  return directories
}

const getScripts = source => {
  const html = fs.readFileSync(`./${source}/index.html`, 'utf8');
  return rxs.map(rx => html.match(rx)[1])
}

const renameFiles = (source, files) => {
  for (const file of files) {
    if (file.endsWith('.js')) {
      fs.renameSync(`${source}${file}`, `${source}${file.replace('.js', '-zh.js')}`)
    } else {
      fs.renameSync(`${source}${file}`, `${source}${file.replace('.css', '-zh.css')}`)
    }
  }
}

let html = getHtml('out');
const newScripts = getScripts('out')

for (let i = 0; i < newScripts.length; i++) {
  html = html.replaceAll(newScripts[i], `${newScripts[i]}-zh`)
}

const chunkScripts = getfiles('out', '/chunks')
const pagesScripts = getfiles('out', '/chunks/pages')
const cssScripts = getfiles('out', '/css')

renameFiles('out/_next/static/chunks/', chunkScripts)
renameFiles('out/_next/static/chunks/pages/', pagesScripts)
renameFiles('out/_next/static/css/', cssScripts)



fs.writeFileSync(`./out/index.html`, html)

