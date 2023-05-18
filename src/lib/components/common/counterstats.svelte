<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    const counterElements = document.querySelectorAll('.number');
    const options = {
      threshold: 0.5, // Ekranda görünme yüzdesi
    };

    const callback = (entries: any[], observer: any) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalNumber = parseInt(target.getAttribute('data-number'));
          const duration = 1300; // Animasyon süresi (ms)

          animateNumber(target, finalNumber, duration);
        }
      });
    };

    const animateNumber = (element: { textContent: number; }, finalNumber: number, duration: number) => {
      let currentNumber = 0;
      const increment = finalNumber / (duration / 16); // Her 16ms'de bir artış miktarı (16ms ≈ 1 kare)

      const interval = setInterval(() => {
        currentNumber += increment;
        
        element.textContent = Math.floor(currentNumber);

        if (currentNumber >= finalNumber) {
          element.textContent = finalNumber;
          clearInterval(interval);
        }
      }, 16);
    };

    const observer = new IntersectionObserver(callback, options);

    counterElements.forEach((element) => {
      observer.observe(element);
    });
  });
</script>

<section class="ftco-section ftco-counter bg-secondary" id="section-counter"  data-stellar-background-ratio="0.5">
  <div class="container" >
    <div class="row d-md-flex align-items-center justify-content-end">
      <div class="col-lg-10">
        <div class="row d-md-flex align-items-center">
          <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div class="block-18">
              <div class="text">
                <strong class="number" data-number="18">0</strong>
                <span>Yıllık Deneyim</span>
              </div>
            </div>
          </div>
          <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div class="block-18">
              <div class="text">
                <strong class="number" data-number="702">0</strong>
                <span>Mutlu Müşteri</span>
              </div>
            </div>
          </div>
          <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div class="block-18">
              <div class="text">
                <strong class="number" data-number="129">0</strong>
                <span>Tamamlanmış Proje</span>
              </div>
            </div>
          </div>
          <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div class="block-18">
              <div class="text">
                <strong class="number" data-number="81">0</strong>
                <span>İlde Hizmet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<style>
    .ftco-section {
    padding: 7em 0;
    position: relative; }

    .ftco-counter {
    padding: 6em 0; }
    @media (max-width: 1199.98px) {
      .ftco-counter {
        background-position: center center !important; } }
    .ftco-counter .block-18 {
      display: block;
      width: 100%;
      text-align: center; }
    .ftco-counter .text strong.number {
      font-weight: 500;
      font-size: 40px;
      color: #2e3339;
      display: block; }
    .ftco-counter .text span {
      display: block;
      font-size: 16px;
      color: #2e3339 }
    @media (max-width: 767.98px) {
      .ftco-counter .counter-wrap {
        margin-bottom: 20px; } }


        #section-counter {
    position: relative;
    z-index: 0; }
    #section-counter:after {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      content: '';
      z-index: -1;
      opacity: .8;
      background-color: rgba(100, 111, 222, 0.1); 
  }


  .d-md-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important; }

  .ftco-animate {
    opacity: 1;
    visibility: visible; }

</style>