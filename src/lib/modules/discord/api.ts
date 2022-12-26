const VITE_DISCORD_WIDGET = import.meta.env.VITE_DISCORD_WIDGET;

export const getWidgetData = async (fetch: (info: RequestInfo) => Promise<Response>) => {
  const response = await fetch(VITE_DISCORD_WIDGET);
  return response.json();
}