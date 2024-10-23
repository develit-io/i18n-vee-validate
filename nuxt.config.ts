// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    'nuxt-i18n-micro',
    '@vee-validate/nuxt',
    '@pinia/nuxt'
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr' },
      { code: 'cs', iso: 'cz-CS', dir: 'ltr' },
    ],
    defaultLocale: 'cs',
    translationDir: 'locales',
    fallbackLocale: 'cs',
    meta: false,
    autoDetectLanguage: true,
    disablePageLocales: true,
  },
})
