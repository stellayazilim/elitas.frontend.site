import type { LayoutServerLoad } from './$types';
import { products, type ICategories } from '$lib/server/constants/products';

export const load = (() => {

	const categories: Partial< ICategories>[] = products.map(x => ({
        category:x.category,
        slug:x.slug
    }))
	return {
		categories
	};
}) satisfies LayoutServerLoad;
