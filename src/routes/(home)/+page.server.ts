import type { PageServerLoad } from './$types';
import { products } from '$lib/server/constants/products';

export const load = (() => {
	return {
		products: products
	};
}) satisfies PageServerLoad;
