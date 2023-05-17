<script lang="ts">

    const littleTitle ="Teklif Alın"
    const inviteKeywords = "Değerli müşterilerimiz, buharlı ütü makineleri üreten bir yer olarak size en iyi hizmeti sunmak için buradayız. Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz"
    const address = "Güneştepe mah. Necip Fazıl Kısakürek Cd. No:102, Güngören/İSTANBUL"
    const email = "admin@elitasmakina.com"
    const phone = "+90 539 579 88 79"
 
    function navigateToAddress(event: { preventDefault: () => void; }) {
        event.preventDefault(); // Sayfanın yenilenmesini engeller

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            console.log("Konum bilgisi desteklenmiyor.");
        }
        }

        function successCallback(position: { coords: { latitude: any; longitude: any; }; }) {
        const { latitude, longitude } = position.coords;
        const address = "Güneştepe mah. Necip Fazıl Kısakürek Cd. No:102, Güngören/İSTANBUL";
        const encodedAddress = encodeURIComponent(address);
        const mapUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/${encodedAddress}`;
        window.open(mapUrl, "_blank");
        }

        function errorCallback(error: any) {
        console.log("Konum bilgisi alınamadı:", error);
        }



</script>
<div class="text-center font-weight-semi-bold">
<h4 class="font-weight-bold mb-3 ">{littleTitle}</h4>
                <p class="mb-2">{inviteKeywords}</p>
                <div class="d-flex flex-column mb-3">
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a class="my-1" href="#" on:click={navigateToAddress}><i class="fa fa-map-marker-alt text-primary mr-3" ></i>Adres: {address}</a>
                    <a class="my-1" href="mailto:{email}"><i class="fa fa-envelope text-primary mr-3"></i>E-posta: {email}</a>
                    <a class="my-1" href="tel:{phone}"><i class="fa fa-phone-alt text-primary mr-3"></i>Telefon: {phone}</a>
                </div>
</div>