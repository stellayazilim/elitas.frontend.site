<script lang="ts">

	import { onMount } from "svelte";
	import {page} from "$app/stores"


	let main : HTMLElement

	onMount(() => {
		window.scrollTo({
			top:main.offsetTop,
			behavior:"smooth"
		})
	})


</script>
<!--  
<h1 style="padding: 12rem; font-size:12rem; padding-bottom: 0;">
	{$page.status}
</h1>
<span style="display: block; margin: 0 12rem; font-size:4rem">
	{$page.error.message}
</span>
 -->



  <main bind:this={main} class="container" id="container">
    <div class="content" id="content">
      <div class="header">
        <div class="header__title">
         {#if $page.error?.message != "Not Found"}
		 <h1 class="header__h1">{$page.status} {$page.error?.message}</h1><!-- Sayfa bulunamadı -->
			
		 {:else}
		 <h1 class="header__h1">{$page.status} Sayfa bulunamadı</h1><!-- Sayfa bulunamadı -->
		 {/if}
          <img class="header__ilustration" src="/img/404/compass.svg" alt="Minimalist compass color gray">
        </div>
        <p class="header__text">Kaybolmuş görünüyorsun. Ana sayfaya dön</p>
        <a class="header__button" href="/">ANASAYFA</a>
      </div>
      <div class="ilustration-container">
        <img class="ilustration" src="/img/404/page.svg" alt="page figure pattern">
      </div>
    </div>
  </main>

  <style>
	:root {
	  --gray-color: #4C566A;
	  --gray-dark-color: #2a303b;
	  --blue-1-color:  rgba(10, 128, 254, 0.07);
	  --blue-2-color: rgba(0, 123, 255, 0.2);
	  --littlesoft-blue: rgba(0, 123, 255, 0.2);
	  --bg-color: #ffffff;
	
	  --sm-font-size: 0.7rem;
	  --lg-font-size: 1.2rem;
	  --sm-title-size: 2.4rem;
	  --lg-title-size: 4.8rem;
	
	  --sm-compass-size: 2.6rem;
	  --lg-compass-size: 4.8rem;
	  --sm-routes-size: 15rem;
	  --lg-routes-size: 30rem;
	
	  --border-radius: 1rem;
	}
	
	/* Globals */
	*, *:before, *:after {
	  box-sizing: inherit;
	}
	
	a {
	  text-decoration: none;
	 
	}
	img {
	  width: 100%;
	  max-width: 100%;
	}
	
	/* Container */
	.container {
	  height: 100vh;
	  width: 100vw;
	  z-index: 1;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.content {
	  margin: 0 auto;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	}
	@media (min-width: 768px) {
	  .content {
		flex-direction: row;
		gap: 10rem;
	  }
	}

	
	/* Header */
	.header {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	  text-align: center;
	  gap: 4rem;
	}
	.header__title {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  gap: 3rem;
	}
	.header__h1 {
	  font-size: var(--sm-title-size);
	  color: var(--gray-dark-color);
	  font-weight: bold;
	}
	@media (min-width: 780px) {
	  .header__h1 {
		font-size: var(--lg-title-size);
	  }
	}
	.header__ilustration {
	  width: var(--sm-compass-size);
	}
	@media (min-width: 768px) {
	  .header__ilustration {
		width: var(--lg-compass-size);
	  }
	}
	.header__button {
	  padding: 1.3rem 2.6rem;
	  background-color: var(--blue-2-color);
	  border-radius: var(--border-radius);
	  font-weight: bold;
	  transition: opacity 300ms ease;
	}
	.header__button:hover {
	  background-color: rgba(10, 128, 254, 0.07);
	}
	
	/* 404 page */
	.ilustration-container {
	  margin-top: 4rem;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	@media (min-width: 768px) and (max-width: 997px) {
		.ilustration-container{
			display: none;
		}
	}

	.ilustration {
	  width: var(--sm-routes-size);
	  margin: 0 auto;
	}
	@media (min-width: 900px) {
	  .ilustration {
		width: var(--lg-routes-size);
	  }
	}
	</style>