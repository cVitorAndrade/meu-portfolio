import global_en from "./en/global.json"
import global_ptBr from "./pt-br/global.json"

import i18next from "i18next"

i18next.init({
    lng: "pt",
  
    resources: {
      en: {
        global: global_en,
      },
      pt: {
        global: global_ptBr
      }
    },
  
    interpolation: {
      escapeValue: false
    }
  })

export default i18next