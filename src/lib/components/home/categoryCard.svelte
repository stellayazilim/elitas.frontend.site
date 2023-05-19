<script lang="ts">
	interface IProductItem {
		name: string;
		url: string;
		description: string;
		explanation: string;
		img?: {
			src: string;
			alt: string;
		};
	}
	export let items: IProductItem[];
	export let productOrCategoryName: string;
	export let slug: string;
</script>

<div class="col-lg-3 col-md-6 pb-1">
	<div class="cat-item d-flex flex-column border mb-4" style="padding: 20px;">
		<p class="text-right">{items?.length} ürün</p>
		<a
			href="/products/#{slug}" aria-label="{productOrCategoryName}"
			class="cat-img position-relative overflow-hidden height-contain mb-3"
		>
			{#if items[0]?.img?.src}
				<img class="img-fluid" src={items[0]?.img?.src} alt={items[0]?.img?.alt} />
			{/if}
		</a>
		<a href="/products/#{slug}" class="text-decoration-none">
			<span class="font-weight-semi-bold m-0">
				{productOrCategoryName || ''}
			</span>
		</a>
	</div>
</div>

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
