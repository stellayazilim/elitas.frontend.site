<script lang="ts">
	import Contactform from "$lib/components/contact/contactform.svelte";
	import Contacttitle from "$lib/components/contact/contacttitle.svelte";
	import Seeonmap from "$lib/components/contact/seeonmap.svelte";
	import Contactinvite from "$lib/components/contact/contactinvite.svelte";


</script>   
        <!-- Contact Start -->
        <div class="container-fluid pt-5">
           <Contacttitle/>
           <Contactinvite/>
            <div class="row px-xl-5">

                <Contactform/>

                <Seeonmap/>
           
            </div>
        </div>
        <!-- Contact End -->
      