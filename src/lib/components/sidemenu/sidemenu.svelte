<script lang="ts">
	import SideMenuItems from '$lib/components/sidemenu/side-menu-items.svelte';
	import { page } from '$app/stores';
	$: showMenu = $page.url.pathname == '/';

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>


	<aside class="col-lg-3 d-none d-lg-block">
		<div
			class="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
			on:click={toggleMenu}
			on:keypress={toggleMenu}
			data-toggle="collapse"
			style="height: 65px; margin-top: -1px; padding: 0 30px;"
		>
			<h6 class="m-0 text-white kalin-kenarlik">Kategoriler</h6>
			<i class="fa fa-angle-down text-dark" />
		</div>
		<nav
			class="collapse show navbar position-absolut bgWhite navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
			id="navbar-vertical"
		>
			
			{#if showMenu}
				<SideMenuItems />
			{/if}
		</nav>
	</aside>

