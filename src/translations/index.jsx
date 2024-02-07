import global_en from "./en/global.json"
import global_ptBr from "./pt-br/global.json"

import i18next from "i18next"

const ptIsSelected = localStorage.getItem("@portfolio-cvitor:isChecked") === 'true';
const defaultValue = localStorage.getItem("@portfolio-cvitor:isChecked") === null;

const language = (ptIsSelected || defaultValue) ? "pt" : "en"

i18next.init({
    lng: language,
  
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