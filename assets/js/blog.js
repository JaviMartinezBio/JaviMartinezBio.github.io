document.addEventListener('DOMContentLoaded', () => {
    const filterOptions = document.querySelectorAll('.blog__link');
    const galleryItems = document.querySelectorAll('.articles__article');
  
    filterOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault(); // Esto evitará que el enlace haga scroll hacia arriba
        const category = e.target.dataset.category; // Obtiene la categoría del enlace clickeado
  
        // Agrega o quita la clase activa de las opciones
        document.querySelector('.blog__option--active').classList.remove('blog__option--active');
        e.target.parentElement.classList.add('blog__option--active');
  
        // Filtra los ítems de la galería basándose en la categoría
        galleryItems.forEach(item => {
          if (category === 'todos' || item.dataset.category === category) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  });
  