/* eslint-disable @typescript-eslint/no-var-requires */
const { initReactI18next } = require('react-i18next');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  serializeConfig: false,
  use: [initReactI18next],
  react: { useSuspense: false },
  keySeparator: '.',
};
