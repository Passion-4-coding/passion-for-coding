import { getContext, setContext } from "svelte";
import { en } from "./en";
import { ua } from "./ua";
import { ru } from "./ru";
import type { ITranslations, Languages, Translation } from "./dto";
export type { Languages, Translation };

/** TODO: Make language recognition by the location */
export const DEFAULT_LANGUAGE = 'ua';

const TRANSLATIONS_KEY = 'translations';
const SELECTED_LANGUAGE_KEY = 'language';
const languages: ITranslations = { en, ua, ru };

export { languages };

export const useTranslations = () => {
  const translations = getContext(TRANSLATIONS_KEY) as Translation;

  const t = (key: string) => translations[key];

  return { t };
}

export const setSelectedLanguage = (lang: Languages) => {
  setContext(SELECTED_LANGUAGE_KEY, lang);
}

export const getSelectedLanguage = () => {
  return getContext(SELECTED_LANGUAGE_KEY) as Languages;
}

export const setTranslations = (translation: Translation) => {
  setContext(TRANSLATIONS_KEY, translation);
}