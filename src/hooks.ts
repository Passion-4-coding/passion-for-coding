import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
    transformPage: ({ html }) => {
      if (event.url.pathname.startsWith('/ua')) {
        return html.replace('<html>', '<html lang="uk-UA">');
      }
      if (event.url.pathname.startsWith('/ru')) {
        return html.replace('<html>', '<html lang="ru">');
      }
      return html.replace('<html>', '<html lang="en">');
    },
  });
	return response;
}