<script lang="ts">
	import EveryProduct from '$lib/components/product/every-product.svelte';
	import ShopSidebar from '$lib/components/product/shop-sidebar.svelte';
	import Backtotop from '$lib/components/common/backtotop.svelte';

	export let data: import('./$types').PageData;

	let searchArea: string;


 
</script>
<meta name="keywords" content="buharlı ütü makineleri, buhar kazanları, paskaralar, transfer baskı presleri, çakım makinaları, leke temizleme makinaları, silter ütü grubu, buharlı ütü makinası, baskı presi, çakım makinası, leke temizleme makinası">
	<section class="p-0 m-0"  id="products">
<!-- Shop Start -->
<div class="container-fluid pt-2">
	<div class="row px-xl-5">
		<!-- Shop Sidebar Start -->
		<ShopSidebar categories={data.categories} />
		<!-- Shop Sidebar End -->

		<!-- Shop Product Start -->

		<div class="col-lg-9 col-md-12">
			<div class="row pb-3">
				<div class="col-12 pb-1">
					<div class="d-flex align-items-center justify-content-between mb-4">
						<form >
							<label class="input-group mb-0">
								<input type="text" class="form-control" placeholder="Ada göre ara" 
									bind:value={searchArea}/> 
								
								<div class="input-group-append">
									<span class="input-group-text bg-transparent text-primary">
										<i class="fa fa-search" />
									</span>
								</div>
							</label>
						</form>
					</div>
				</div>
				<!-- Products Start-->

				<EveryProduct products={data.products} filtered={searchArea}  />
				<!-- Products End-->
			</div>
		</div>
		<!-- Shop Product End -->
	</div>
</div>
<!-- Shop End -->

</section>
<Backtotop/>


<style>
	.form-control:focus{
		border-color: var(--semidark);
	}
	i{
		cursor: pointer;
	}
</style>