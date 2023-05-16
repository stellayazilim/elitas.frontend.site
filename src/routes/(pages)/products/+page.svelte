<script lang="ts">
	import EveryProduct from '$lib/components/product/every-product.svelte';
	import ShopSidebar from '$lib/components/product/shop-sidebar.svelte';
	import Backtotop from '$lib/components/common/backtotop.svelte';

	export let data: import('./$types').PageData;
	

</script>

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
						<form action="">
							<div class="input-group">
								<input type="text" class="form-control" placeholder="Search by name"  /> 
								
								<div class="input-group-append">
									<span class="input-group-text bg-transparent text-primary">
										<i class="fa fa-search" />
									</span>
								</div>
							</div>
						</form>
					</div>
				</div>
				<!-- Products Start-->

				<EveryProduct products={data.products} />
				<!-- Products End-->
			</div>
		</div>
		<!-- Shop Product End -->
	</div>
</div>
<!-- Shop End -->


<Backtotop/>