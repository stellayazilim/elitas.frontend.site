<script lang="ts">
	import type { ICategories } from "$lib/server/constants/products";

	
	export let categories: Partial<ICategories>[];
</script>

<div class="col-lg-3 col-md-12 position-static">
	<!-- CategoriNav Start -->
	<div class="border-bottom mb-4 pb-4 mt-5">
		<h5 class="font-weight-semi-bold mb-4">Kategori Seçenekleri</h5>
		<form>
			{#each categories as product}
				<div
					class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
				>
					<a class="custom-control-label" href="#{product.slug}">{product.category}</a>
				</div>
			{/each}
		</form>
	</div>
	<!-- CategoriNav End -->
</div>
