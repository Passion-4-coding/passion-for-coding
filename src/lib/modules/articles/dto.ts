export interface IArticle {
  _id: string;
  createdOn: string;
  updatedOn: string;
  publishedOn: Date;
  slug: string;
  language: "ua" | "en";
  title: string;
  content: string;
  image?: string;
  titleCompact: string;
  contentCompact: string;
  titleSeo: string;
  descriptionSeo: string;
  keywordsSeo: string;
  pending: boolean;
  active: boolean;
}