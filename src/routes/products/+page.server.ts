import type { PageServerLoad } from './$types';
import { products } from '$lib/server/constants/products';
export const load = (() => {
	return {
		pageName: 'Ürünler',
		products
	};
}) satisfies PageServerLoad;
