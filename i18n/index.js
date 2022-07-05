const en = require('./translations.en.json')
const zhHK = require('./translations.zhHK.json')
const i18n = {
    translations: {
        'zh-HK': zhHK,
        en,
    },
    defaultLang: 'zh-HK',
    useBrowserDefault: false,
}

module.exports = i18n
