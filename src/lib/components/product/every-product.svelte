<script lang="ts">
	import type { ICategories } from '$lib/server/constants/products';

	export let products: ICategories[];
	export let filtered: string | undefined;

	$: filteredProducts = filtered
		? products.map((category) => ({
				...category,
				items: category.items.filter((product) => product.name.includes(filtered || ''))
		  }))
		: products;
</script>

{#each filteredProducts as product}
	{#if product.items.length > 0}
		<div class="col-12 mb-3 mt-3 pb-2 pt-3 product-title-border">
			<h3 class="font-weight-semi-bold ml-5 text-dark" id={product?.slug}>{product.category}</h3>
		</div>
	{/if}

	{#each product.items as item}
		<div class="col-lg-4 col-md-6 col-sm-12 pb-1">
			<div class="card product-item border-0 mb-4">
				<div
					class="card-header product-img position-relative overflow-hidden bg-transparent border height-contain p-0"
				>
					<img
						class="img-fluid w-100 h-100"
						src={item.img?.src || '/img/404/notfound.png'}
						alt={item.img?.src}
					/>
				</div>
				<div class="card-body border-left border-right border text-center p-0 pt-4 pb-3">
					<h6 class="text-truncate mb-3">
						{item.name}
					</h6>
				</div>
				<div class="card-footer d-flex justify-content-between bg-light border">
					<a	aria-label="{item.name}-bağlantısı"
						href="/product/{product.slug}/{item.slug}#_navbar"
						class="btn btn-sm text-dark w-100"
					>
						<i class="fas fa-eye text-info mr-1" />Detayları Gör
					</a>
				</div>
			</div>
		</div>
	{:else}
		<div />
	{/each}
{/each}

<style>
	.height-contain {
		height: 26rem;
	}
	.height-contain img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

</style>
