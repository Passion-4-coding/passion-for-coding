import type { IRole } from "./types";

export const roles: IRole[] = [
  { name: "Service", descriptionTranslationKey: "serviceDescription", image: "role0000" },
  { name: "Trainee", descriptionTranslationKey: "traineeDescription", image: "role0001" },
  { name: "Junior", descriptionTranslationKey: "juniorDescription", image: "role0010" },
  { name: "Middle", descriptionTranslationKey: "middleDescription", image: "role0011" },
  { name: "Senior", descriptionTranslationKey: "seniorDescription", image: "role0100" },
  { name: "Principal", descriptionTranslationKey: "principalDescription", image: "role0101" },
  { name: "Architect", descriptionTranslationKey: "architectDescription", image: "role0110" },
  { name: "Lead", descriptionTranslationKey: "leadDescription", image: "role1110" },
  { name: "Owner", descriptionTranslationKey: "ownerDescription", image: "role1111" },
]