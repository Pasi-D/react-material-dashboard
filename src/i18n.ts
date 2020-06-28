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

const backendOptions = {
    // path where resources get loaded from, or a function
    // returning a path:
    // function(lngs, namespaces) { return customPath; }
    // the returned path will interpolate lng, ns if provided like giving a static path
    // For gh-page this should be "{GITHUB-PROJECT-NAME}//locales/{{lng}}/{{ns}}.json" otherwise "/locales/{{lng}}/{{ns}}.json"
    loadPath: "react-material-dashboard/locales/{{lng}}/{{ns}}.json"
};

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
        },
        backend: backendOptions
    });

export default i18n;
