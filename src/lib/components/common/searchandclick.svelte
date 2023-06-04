<script>


     
    import { products } from "$lib/server/constants/products";  //Cannot import "path/path/doc.ts" into client-side code
  
    let searchTerm = "";
    let filteredProducts = [];
  
    function search() {
      filteredProducts = [];
      if (searchTerm.length > 0) {
        for (const category of products) {
          for (consttem of category.items) {
            if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              filteredProducts.push(item);
            }
          }
        }
      }
    }
  
    
  </script>
  
  <div class="col-lg-6 col-6 text-left">
    <form action="#">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Search for products"
          bind:value={searchTerm}
          on:input={search}
        />
        <div class="input-group-append">
          <span class="input-group-text bg-transparent text-primary">
            <i class="fa fa-search" />
          </span>
        </div>
      </div>
    </form>
  </div>
  
  {#if filteredProducts.length > 0}
    <div>
      {#each filteredProducts as item}
        <a href={item.url}>
          <img src={item.img.src} alt={item.img.alt} />
          <p>{item.name}</p>
        </a>
      {/each}
    </div>
  {:else if searchTerm.length > 0}
    <p>Ürün bulunamadı.</p>
  {/if}
  