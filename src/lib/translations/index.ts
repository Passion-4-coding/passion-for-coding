import { getContext, setContext } from "svelte";
import { en } from "./en";
import { ua } from "./ua";
import { ru } from "./ru";
import type { IRegistry, ITranslations, Languages, Translation } from "./dto";
export type { Languages, Translation };

const IP_REGISTRY_KEY = import.meta.env.VITE_IP_REGISTRY_KEY;

const TRANSLATIONS_KEY = 'translations';
const SELECTED_LANGUAGE_KEY = 'language';
const languages: ITranslations = { en, ua, ru };
const RUSSIAN_SPEAKING_COUNTRY_CODES = ['RU', 'BY', 'KG', 'KZ', 'AZ', 'GE', 'MD', 'TJ', 'TM', 'UZ']

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

export const loadDefaultLanguage = async (fetch: (info: RequestInfo) => Promise<Response>): Promise<Languages> => {
  let language: Languages = 'en';
  try {
    const response = await fetch(`https://api.ipregistry.co?key=${IP_REGISTRY_KEY}`);
    const ipregistry: IRegistry = await response.json();
    if (ipregistry?.location?.country?.code === 'UA') {
      language = 'ua'
    }
    if (RUSSIAN_SPEAKING_COUNTRY_CODES.includes(ipregistry?.location?.country?.code)) {
      language = 'ru'
    }
  } catch {
    // TODO: log error
  }
  return language;
}