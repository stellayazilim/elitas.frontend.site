<script lang="ts">
	import Sidemenu from '$lib/components/sidemenu/sidemenu.svelte';
	import Carousel from '$lib/components/home/carousel.svelte';
	import DropdownBar from '$lib/components/dropdown-bar/drop-down-bar.svelte';
	
	import { page } from '$app/stores';

</script>

<div class="container-fluid mb-5">
	<div class="row border-top px-xl-5">
		<Sidemenu />
		<div class="col-lg-9">
			<DropdownBar />
			{#if $page.url.pathname == '/'}
				<Carousel />
			{/if}
		</div>
	</div>
</div>
