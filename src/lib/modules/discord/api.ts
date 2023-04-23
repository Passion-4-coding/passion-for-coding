const VITE_DISCORD_WIDGET = import.meta.env.VITE_DISCORD_WIDGET;
const VITE_API_URL = import.meta.env.VITE_API_URL;

export const getWidgetData = async (fetch: (info: RequestInfo) => Promise<Response>) => {
  const response = await fetch(VITE_DISCORD_WIDGET);
  return response.json();
}

export const getUserCount = async (fetch: (info: RequestInfo) => Promise<Response>) => {
  const response = await fetch(`${VITE_API_URL}/member-count`);
  return response.text();
}