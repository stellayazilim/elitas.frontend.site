<script lang="ts">
	import DropdownItems from '$lib/components/dropdown-bar/drop-down-items.svelte';

	/* Dropdown start */


	let width: number;
	let isOpen = true;

	$: if (width <= 992) isOpen = false;
	else isOpen = true;

	/* Dropdown end */
</script>

<svelte:window bind:innerWidth={width} />

<nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
	<a href="/" class="text-decoration-none d-block d-lg-none">
		<h1 class="m-0 display-5 font-weight-semi-bold">
			<!-- <span class="text-primary font-weight-bold border px-3 mr-1">E</span> -->
			<img src="/img/elitas-main.svg" style="width: 9rem; height:auto;" width="144" height="38" alt="Elitaş Logo" />
		</h1>
	</a>
	<button
		type="button"
		aria-label="dropdown toggle button"
		class="navbar-toggler"
		data-toggle="collapse"
		data-target="/navbarCollapse"
		on:click={() => (isOpen = !isOpen)}
	>
		<span class="navbar-toggler-icon" />
	</button>

	<div
		class="collapse navbar-collapse justify-content-between"
		id="navbarCollapse"
		class:show={isOpen}
	>
		{#if isOpen}
			<DropdownItems />
		{/if}
	</div>
</nav>
