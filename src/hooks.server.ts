import type { Handle} from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  

    const response = await resolve(event);
    if (response.headers.get("Content-Type") == "text/html") {
        response.headers.set( "Content-Type", "text/html; charset=UTF-8")
        return response
            
    }
    return response;
}) satisfies Handle;