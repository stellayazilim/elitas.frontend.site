<script lang="ts">
	import Contactform from '$lib/components/contact/contactform.svelte';
	import Contacttitle from '$lib/components/contact/contacttitle.svelte';
	import Seeonmap from '$lib/components/contact/seeonmap.svelte';
	import Contactinvite from '$lib/components/contact/contactinvite.svelte';
	export let contactData: import('$lib/types/contact.data').IContactData;
</script>

<!-- Contact Start -->
<section id="contact">
	<div class="container-fluid pt-5">
		<Contacttitle />
		<Contactinvite {contactData} />
		<div class="row px-xl-5">
			<Contactform />
	
			<Seeonmap />
		</div>
	</div>
</section>
<!-- Contact End -->
