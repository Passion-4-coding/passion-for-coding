export type Languages = 'en' | 'ua' | 'ru';

export type Translation = { [key: string]: string };

export interface ITranslations {
  en: Translation;
  ua: Translation;
  ru: Translation;
}