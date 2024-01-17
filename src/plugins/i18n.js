import { createI18n } from 'vue-i18n'
import localesEN from '@/locales/en.json'
import localesRU from '@/locales/ru.json'


const i18n = createI18n({
  legacy: false, //for Composition API
  locale: import.meta.env.VITE_I18N_LOCALE || 'ru',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'ru',
  messages: {
    en: localesEN,
    ru: localesRU
  },
  globalInjection: true
})


export default i18n