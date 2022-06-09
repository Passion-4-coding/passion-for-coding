export type Languages = 'en' | 'ua' | 'ru';

export type Translation = { [key: string]: string | {[key: string]: string} };

export interface ITranslations {
  en: Translation;
  ua: Translation;
  ru: Translation;
}

export interface IRegistry {
  location: {
    country: {
      code: string;
    }
  }
}