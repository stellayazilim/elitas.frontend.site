<script context="module" lang="ts">
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';

	export const navs = [
		{ text: 'Anasayfa', url: '/' },
		{ text: 'Katalog', url: '/products' },
		{ text: 'Vizyon-Misyon', url: '/vision-mission' },
		{ text: 'İletişim', url: '/contact' }
	];
</script>

<div
	class="navbar-nav mr-auto py-0"
	in:slide|local={{ duration: 600 }}
	out:slide|local={{ duration: 500 }}
>
	{#each navs as navItem}
		<a href={navItem.url} class="nav-item nav-link" class:active={$page.url.pathname == navItem.url}
			>{navItem.text}</a
		>
	{/each}
</div>
