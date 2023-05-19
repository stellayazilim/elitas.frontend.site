<script lang="ts">
	import Glide from '@glidejs/glide';
	import '@glidejs/glide/dist/css/glide.core.min.css';
	import { onMount } from 'svelte';

	let glide: HTMLDivElement;
	onMount(() => {
		new Glide(glide, {
			type: 'carousel',
			gap: 0,
			autoplay: 5000,
			animationDuration: 900,
			animationTimingFunc: 'ease'
		}).mount();
	});
</script>

<div bind:this={glide} class="glide">
	<div class="glide__track" data-glide-el="track">
		<ul class="glide__slides align-items-center">
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/1.webp" alt="Image1" />
					<img class="img-fluid mobile-image" src="img/slider/1-mobile.webp" alt="Mobile Image1" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/2.webp" alt="Image2" />
					<img class="img-fluid mobile-image" src="img/slider/2-mobile.webp" alt="Mobile Image2" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/3.webp" alt="Image3" />
					<img class="img-fluid mobile-image" src="img/slider/3-mobile.webp" alt="Mobile Image3" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/4.webp" alt="Image4" />
					<img class="img-fluid mobile-image" src="img/slider/4-mobile.webp" alt="Mobile Image4" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/5.webp" alt="Image5" />
					<img class="img-fluid mobile-image" src="img/slider/5-mobile.webp" alt="Mobile Image5" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/6.webp" alt="Image6" />
					<img class="img-fluid mobile-image" src="img/slider/6-mobile.webp" alt="Mobile Image6" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/7.webp" alt="Image7" />
					<img class="img-fluid mobile-image" src="img/slider/7-mobile.webp" alt="Mobile Image7" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/8.webp" alt="Image8" />
					<img class="img-fluid mobile-image" src="img/slider/8-mobile.webp" alt="Mobile Image8" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/9.webp" alt="Image9" />
					<img class="img-fluid mobile-image" src="img/slider/9-mobile.webp" alt="Mobile Image9" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/10.webp" alt="Image10" />
					<img class="img-fluid mobile-image" src="img/slider/10-mobile.webp" alt="Mobile Image10" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/11.webp" alt="Image11" />
					<img class="img-fluid mobile-image" src="img/slider/11-mobile.webp" alt="Mobile Image11" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/12.webp" alt="Image12" />
					<img class="img-fluid mobile-image" src="img/slider/12-mobile.webp" alt="Mobile Image12" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/13.webp" alt="Image13" />
					<img class="img-fluid mobile-image" src="img/slider/13-mobile.webp" alt="Mobile Image13" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/14.webp" alt="Image14" />
					<img class="img-fluid mobile-image" src="img/slider/14-mobile.webp" alt="Mobile Image14" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/15.webp" alt="Image15" />
					<img class="img-fluid mobile-image" src="img/slider/15-mobile.webp" alt="Mobile Image15" />
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid desktop-image" src="img/slider/16.webp" alt="Image16" />
					<img class="img-fluid mobile-image" src="img/slider/16-mobile.webp" alt="Mobile Image16" />
				</div>
			</li>	
		</ul>
	</div>
	<!--    Carousel Controller -->
	<div class="glide__arrows" data-glide-el="controls">
		<div class="glide__arrow glide__arrow--left" data-glide-dir="<">
			<div class="carousel-control-prev">
				<div class="btn btn-dark" style="width: 45px; height: 45px;">
					<span class="carousel-control-prev-icon mb-n2" />
				</div>
			</div>
		</div>
		<div class="glide__arrow glide__arrow--right" data-glide-dir=">">
			<div class="carousel-control-next">
				<div class="btn btn-dark" style="width: 45px; height: 45px;">
					<span class="carousel-control-next-icon mb-n2" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.active img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
		@media (max-width: 768px) {
		.desktop-image {
			display: none; /* Masaüstü resimlerini gizle */
		}
		.mobile-image {
			display: block; /* Mobil resimleri göster */
		}
	}

		@media (min-width: 769px) {
			.desktop-image {
				display: block; /* Masaüstü resimleri göster */
			}
			.mobile-image {
				display: none; /* Mobil resimleri gizle */
			}
		}
</style>
