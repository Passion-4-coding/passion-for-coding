export interface IActivityItem {
  name: string;
  titleTranslationKey: string;
  descriptionTranslationKey: string;
}

export enum EActivityTabs {
  community = "community",
  questions = "questions",
  vacancies = "vacancies",
  resources = "resources",
  bots = "bots",
}