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
		<ul class="glide__slides">
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/1.jpg" alt="Image1" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/2.jpg" alt="Image2" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/3.jpg" alt="Image3" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/4.jpg" alt="Image4" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/5.jpg" alt="Image5" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/6.jpg" alt="Image6" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/7.jpg" alt="Image7" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/8.jpg" alt="Image8" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/9.jpg" alt="Image9" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/10.jpg" alt="Image10" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/11.jpg" alt="Image11" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/12.jpg" alt="Image12" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
				</div>
			</li>
			<li class="glide__slide">
				<div class="carousel-item carousel-img-fit active" style="height: 450px;">
					<img class="img-fluid" src="img/slider/13.jpg" alt="Image13" />
	 <!-- 				<div
						class="carousel-caption d-flex flex-column align-items-center justify-content-center"
					>
						<div class="p-3" style="max-width: 700px;">
							<h4 class="text-light text-uppercase font-weight-medium mb-3">
								Bilgi için iletişime geçin
							</h4>
							<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
						</div>
					</div> 
 -->
					<li class="glide__slide">
						<div class="carousel-item carousel-img-fit active" style="height: 450px;">
							<img class="img-fluid" src="img/slider/14.jpg" alt="Image14" />
							<div
								class="carousel-caption d-flex flex-column align-items-center justify-content-center"
							>
								<div class="p-3" style="max-width: 700px;">
									<h4 class="text-light text-uppercase font-weight-medium mb-3">
										Bilgi için iletişime geçin
									</h4>
									<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
								</div>
							</div>
							<li class="glide__slide">
								<div class="carousel-item carousel-img-fit active" style="height: 450px;">
									<img class="img-fluid" src="img/slider/15.jpg" alt="Image15" />
									<div
										class="carousel-caption d-flex flex-column align-items-center justify-content-center"
									>
										<div class="p-3" style="max-width: 700px;">
											<h4 class="text-light text-uppercase font-weight-medium mb-3">
												Bilgi için iletişime geçin
											</h4>
											<h3 class="display-4 text-white font-weight-semi-bold mb-4">Elitaş Makina</h3>
										</div>
									</div>
									<li class="glide__slide">
										<div class="carousel-item carousel-img-fit active" style="height: 450px;">
											<img class="img-fluid" src="img/slider/16.jpg" alt="Image16" />
											<div
												class="carousel-caption d-flex flex-column align-items-center justify-content-center"
											>
												<div class="p-3" style="max-width: 700px;">
													<h4 class="text-light text-uppercase font-weight-medium mb-3">
														Bilgi için iletişime geçin
													</h4>
													<h3 class="display-4 text-white font-weight-semi-bold mb-4">
														Elitaş Makina
													</h3>
												</div>
											</div>
										</div>
									</li>
								</div>
							</li>
						</div>
					</li>
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
</style>
