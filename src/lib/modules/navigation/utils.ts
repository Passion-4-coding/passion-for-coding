import type { INavigationItem } from "./types";

export const NAVIGATION_ITEMS: INavigationItem[] = [
  {
    translationKey: "about",
    route: "/about"
  },
  {
    translationKey: "activities",
    route: "/activities"
  },
  {
    translationKey: "articles",
    route: "https://blog.pfc.dev/",
    external: true
  },
  {
    translationKey: "rules",
    route: "/rules"
  },
  {
    translationKey: "roles",
    route: "/roles"
  },
]