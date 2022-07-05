var en = require('./translations.en.json')
var zhHK = require('./translations.zhHK.json')
const i18n = {
    translations: {
        zhHK,
        en,
    },
    defaultLang: "zhHK",
    useBrowserDefault: false,
};

module.exports = i18n;