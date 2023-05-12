<script lang="ts">
	import Footer from './footer.svelte';
	import Topbar from '$lib/components/topbar.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import Header from '$lib/components/common/navbar/header.svelte';
	import { page } from '$app/stores';
</script>

<!-- Topbar Start -->
<Topbar />
<!-- Topbar End -->

<!-- Navbar Start -->
<Navbar />
{#if $page.url.pathname != '/'}
	<Header />
{/if}
<!-- Navbar End -->
<main>
	<slot />
</main>

<Footer />
