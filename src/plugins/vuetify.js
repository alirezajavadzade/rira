// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { fa } from 'vuetify/locale'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    locale: {
      locale: 'fa',
      fallback: 'fa',
      messages: { fa },
      rtl: { fa: true },
    },
  }
)
