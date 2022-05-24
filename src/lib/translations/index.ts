import { getContext, setContext } from "svelte";
import { en } from "./en";
import { ua } from "./ua";
import { ru } from "./ru";
import type { ITranslations, Languages, Translation } from "./dto";
export type { Languages, Translation };

const TRANSLATIONS_KEY = 'translations';

const languages: ITranslations = { en, ua, ru };

export { languages };

export const useTranslations = () => {
  const translations = getContext(TRANSLATIONS_KEY) as Translation;

  const t = (key: string) => translations[key];

  return { t };
}

export const setTranslations = (translation: Translation) => {
  setContext(TRANSLATIONS_KEY, translation);
}