/**
 * User session Language related common functions
 */
import { LANGUAGES_KEY } from "i18n";

const SESSION_LANGUAGE_KEY: string = "user-lang"; // local-storage key for save language

export let primaryLanguage = "English"; // Current Language of the user
// TODO: can't resolve this type conversion properly
export let primaryLanguageKey: typeof LANGUAGES_KEY[number] = "en"; // Current Language key

/**
 * Save the language chosen to Local Storage
 * @param language - Language key selected
 */
export const saveLanguageToLocalStorage = (language: typeof LANGUAGES_KEY[number]) => {
    localStorage.setItem(SESSION_LANGUAGE_KEY, language);
};

export const getLanguagFromLocalStorage = ():
    | typeof LANGUAGES_KEY[number]
    | string
    | null => {
    return localStorage.getItem(SESSION_LANGUAGE_KEY);
};
