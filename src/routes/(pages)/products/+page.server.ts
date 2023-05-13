import type { PageServerLoad } from './$types';
import { products } from '$lib/server/constants/products';
export const load = (async({
	parent
}) => {

	const {categories} = await parent()

	return {
		pageName: 'Ürünler',
		products
	};
}) satisfies PageServerLoad;
