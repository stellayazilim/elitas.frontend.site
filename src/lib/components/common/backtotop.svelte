<script>
    import { onMount } from 'svelte';
  
    let showButton = false;
  
    function fadeInButton() {
      const backButton = document.querySelector('.back-to-top');
      if (backButton) backButton.classList.add('show');
    }
  
    function fadeOutButton() {
      const backButton = document.querySelector('.back-to-top');
      if (backButton) backButton.classList.remove('show');
    }
  
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    onMount(() => {
      window.addEventListener('scroll', () => {
        showButton = (window.pageYOffset > 100);
      });
    });
  </script>
  
  <style>
    .back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s linear;
    }
  
    .back-to-top.show {
      opacity: 1;
    }
  </style>
  
  <button 
        class={`btn btn-primary back-to-top ${showButton ? 'show' : ''}`}
        on:click={scrollToTop}
        on:animationend={showButton ? fadeInButton : fadeOutButton}
        >
        <i class="fa fa-angle-double-up" />
    </button>
  