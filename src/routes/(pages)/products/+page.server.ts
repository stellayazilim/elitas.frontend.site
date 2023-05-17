import type { PageServerLoad } from './$types';
import { products } from '$lib/server/constants/products';
export const load = (async () => {
	return {
		pageName: 'Katalog',
		products
	};
}) satisfies PageServerLoad;
