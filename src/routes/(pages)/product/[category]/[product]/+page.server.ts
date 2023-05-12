import { type ServerLoad, error } from '@sveltejs/kit';
import { products, type IProduct } from '$lib/server/constants/products';

export const load: ServerLoad = (({ params }) => {
	const { category, product } = params;

	const item: IProduct | undefined = products
		.find((item) => item.slug == category)
		?.items.find((item) => item.slug == product);

	if (item == undefined) throw error(404, 'Urun Bulunamadi');
	return {
		pageName: 'Ürün',
		item
	};
}) as ServerLoad;
