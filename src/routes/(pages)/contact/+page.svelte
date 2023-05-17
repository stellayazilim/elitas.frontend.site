<script lang="ts">
	import Contact from '$lib/components/contact/contact.svelte';
	import Backtotop from '$lib/components/common/backtotop.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Contact contactData={data} />
<Backtotop />
