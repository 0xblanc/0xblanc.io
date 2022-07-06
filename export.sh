mkdir temp
cp ./docs/CNAME ./temp/CNAME
cp ./docs/.nojekyll ./temp/.nojekyll
cp ./i18n/index.js.en ./i18n/index.js
npm run export
rm -rf ./docs
cp -rf ./out ./docs
node deployment-add-lang-tag.js en
cp ./i18n/index.js.zh ./i18n/index.js
npm run export
node deployment-scripts-replace.js
node deployment-add-lang-tag.js zh-hk
mkdir ./docs/zh-hk
cp ./out/index.html ./docs/zh-hk/index.html
cp -rn ./out/_next/* ./docs/_next
cp ./i18n/index.js.bak ./i18n/index.js
rm -rf ./out
cp ./temp/CNAME ./docs/CNAME
cp ./temp/.nojekyll ./docs/.nojekyll
rm -rf ./temp
