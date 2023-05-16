<script>
    const input = document.querySelector('input.form-control');
    const cards = document.querySelectorAll('.card.product-item');
  
    input.addEventListener('input', function() {
      const searchText = input.value.toLowerCase();
  
      cards.forEach(function(card) {
        const itemName = card.querySelector('h6.text-truncate').textContent.toLowerCase();
        if (itemName.includes(searchText)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  </script>


<input type="text" class="form-control" placeholder="Search by name" />