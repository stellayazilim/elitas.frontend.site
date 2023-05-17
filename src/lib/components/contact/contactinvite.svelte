<script lang="ts">
	export let contactData: import('lib/types/contact.data').IContactData;
	function navigateToAddress(event: { preventDefault: () => void }) {
		event.preventDefault();
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(successCallback);
		} else {
			console.log('Konum bilgisi desteklenmiyor.');
		}
	}

	function successCallback({
		coords: { latitude, longitude }
	}: {
		coords: { latitude: number; longitude: number };
	}) {
		const mapUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/${encodeURIComponent(
			contactData.googleMapAddress || ''
		)}`;
		window.open(mapUrl, '_blank');
	}
</script>

<div class="text-center font-weight-semi-bold">
	<h4 class="font-weight-bold mb-3">{contactData.subTitle}</h4>
	<p class="mb-2">{contactData.description}</p>
	<div class="d-flex flex-column mb-3">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="my-1" href="#" on:click={navigateToAddress}
			><i class="fa fa-map-marker-alt text-primary mr-3" />Adres: {contactData.address}</a
		>
		<a class="my-1" href="mailto:{contactData.email}"
			><i class="fa fa-envelope text-primary mr-3" />E-posta: {contactData.email}</a
		>
		<a class="my-1" href="tel:{contactData.phone}"
			><i class="fa fa-phone-alt text-primary mr-3" />Telefon: {contactData.phone}</a
		>
	</div>
</div>
