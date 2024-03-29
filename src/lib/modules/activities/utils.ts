import type { IActivityItem } from "./types";

export const activityTabs: string[] = [
  "community",
  "questions",
  "vacancies",
  "resources",
  "bots"
];

export const activityItems: IActivityItem[] = [
  { name: "community", titleTranslationKey: "communityTitle", descriptionTranslationKey: "communityDescription" },
  { name: "questions", titleTranslationKey: "questionsTitle", descriptionTranslationKey: "questionsDescription" },
  { name: "vacancies", titleTranslationKey: "vacanciesTitle", descriptionTranslationKey: "vacanciesDescription" },
  { name: "resources", titleTranslationKey: "resourcesTitle", descriptionTranslationKey: "resourcesDescription" },
  { name: "bots", titleTranslationKey: "botsTitle", descriptionTranslationKey: "botsDescription" },
];