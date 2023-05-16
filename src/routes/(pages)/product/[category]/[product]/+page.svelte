<script lang="ts">
	import { page } from '$app/stores';
    import Backtotop from '$lib/components/common/backtotop.svelte';
    const defaultExplanation = "Firmaların ihtiyaçlarına yönelik olarak tasarladığımız buharlı ütü ve  makinalarımız, işletmenizin profesyonel bir imaj yaratmasına yardımcı olacak şekilde kusursuz bir ütüleme sağlar. Teklif almak için iletişime geçin."
</script>
<!-- single product start -->
<div class="container-fluid py-4">
    <div class="row px-xl-5">
      <div class="col-md-6 pb-5">
        <div class="carousel slide">
          <div class="carousel-inner border">
            <div class="carousel-item active">
              <img src="{$page.data.item.img.src || "/img/404/notfound.png"}" alt="image-{$page.data.item.img.alt}">
            </div>
          </div>
        </div>
      </div>
  
      <div class="col-md-6 pb-5">
        <h3 class="font-weight-semi-bold ml-4 mr-3">
            <!-- item.name gelecek -->{$page.data.item.name}
            <!-- item.explanation gelecek -->  {$page.data.item.description}
         </h3>
        <p class="m-4">
          <!-- item.explanation gelecek --> {$page.data.item.explanation || defaultExplanation} 
        </p>
      </div>
    </div>
  </div>
<!--   single-product-end -->
  <Backtotop/>
  <style>

  .carousel-item img {
    width: 75%; 
    display: block;
    margin: 0 auto;
    max-height: 55vh;
    max-width: 55vw;
    object-fit: contain;
    
  }
  </style>
  
<!-- Shop Detail End -->
