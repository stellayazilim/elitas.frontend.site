<script lang="ts">
	import Footer from '$lib/components/layout/footer.svelte';
	import Topbar from '$lib/components/layout/topbar.svelte';
	import Navbar from '$lib/components/layout/navbar.svelte';

</script>

<!-- Topbar Start -->
<Topbar />
<!-- Topbar End -->
<!-- Navbar Start --> 
<Navbar />
<!-- Navbar End -->

<slot />

<Footer />
