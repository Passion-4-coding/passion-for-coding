const VITE_API_URL = import.meta.env.VITE_API_URL;


export const getArticles = async (fetch: (info: RequestInfo) => Promise<Response>, language: string) => {
  const response = await fetch(`${VITE_API_URL}/articles?language=${language}`);
  return response.json();
}

export const getArticle = async (fetch: (info: RequestInfo) => Promise<Response>, language: string, slug: string) => {
  const response = await fetch(`${VITE_API_URL}/articles/${language}/${slug}`);
  return response.json();
}