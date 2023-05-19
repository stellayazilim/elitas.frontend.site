<script lang="ts">
	import CategoryCard from '$lib/components/home/categoryCard.svelte';
	import type { PageData } from './$types';
    import Backtotop from '$lib/components/common/backtotop.svelte';
	import Counterstats from '$lib/components/common/counterstats.svelte';
	export let data: PageData;
    
</script>
    <!-- counter start -->
    <Counterstats/>
<!-- counter end -->
<!-- Categories Start -->
<div class="container-fluid pt-5">
	<div class="row px-xl-5 pb-3">
		{#each data.products as product}
			<CategoryCard
				slug={product.slug || ''}
				items={product.items}
				productOrCategoryName={product.category}
			/>
		{/each}
	</div>
</div>
<!-- Categories End -->



<!-- Subscribe Start -->
<div class="container-fluid bg-secondary">
	<div class="row justify-content-md-center py-5 px-xl-5">
		<div class="col-md-6 col-12 py-5">
			<div class="text-center mb-2 pb-2">
				<h2 class="section-title px-5 mb-3"><span class="bg-secondary px-2">Güncel kalın</span></h2>
				<p>E-posta adresinizi girerek güncellemelerden haberiniz olsun.</p>
			</div>
			<form action="">
				<div class="input-group">
					<input type="text" class="form-control border-white p-4" placeholder="Email Girin" />
					<div class="input-group-append">
						<button class="btn btn-primary px-4">Kaydet</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
<!-- Subscribe End -->


<!-- Back to Top -->
 <Backtotop/>


