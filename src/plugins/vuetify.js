// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

import { createVueI18nAdapter } from 'vuetify/locale/adapters'
import { createI18n, useI18n } from 'vue-i18n'

const messages = {
  en: {
    $vuetify: {
      dataIterator: {
        rowsPerPageText: 'Items per page:',
        pageText: '{0}-{1} of {2}',
      },
    },
  },
  sv: {
    $vuetify: {
      dataIterator: {
        rowsPerPageText: 'Element per sida:',
        pageText: '{0}-{1} av {2}',
      },
    },
  },
}

const i18n = new createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'sv',
  fallbackLocale: 'en',
  messages,
})

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    locale: createVueI18nAdapter({
      i18n,
      useI18n,
    }),
    theme: {
      defaultTheme: 'dark',
    },
  }
)
