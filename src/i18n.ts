/**
 * i18next configuration for translations
 *
 * Translations are located at public/locales/{lang}/translation.json
 */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";

export const LANGUAGES = [
    {
        code: "en",
        text: "English"
    },
    {
        code: "si",
        text: "සිංහල"
    }
];

export const LANGUAGES_KEY = LANGUAGES.map(lang => {
    return lang.code;
});

i18n
    // load translation using http -> see /public/locales
    .use(Backend)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    .init({
        lng: "en",
        whitelist: LANGUAGES_KEY,
        fallbackLng: "en",
        debug: true,

        interpolation: {
            escapeValue: false // Not needed for react as it escapes by default
        }
    });

export default i18n;
