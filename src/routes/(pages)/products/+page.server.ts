import type { PageServerLoad } from './$types';
import { products } from '$lib/server/constants/products';
export const load = (async({
	parent
}) => {

	const {categories} = await parent()

	return {
		pageName: 'Katalog',
		products
	};
}) satisfies PageServerLoad;
