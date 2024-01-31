document.addEventListener('DOMContentLoaded', () => {
    const filterOptions = document.querySelectorAll('.portfolio__link');
    const galleryItems = document.querySelectorAll('.gallery__item');
  
    filterOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault(); // Esto evitará que el enlace haga scroll hacia arriba
        const category = e.target.dataset.category; // Obtiene la categoría del enlace clickeado
  
        // Agrega o quita la clase activa de las opciones
        document.querySelector('.portfolio__option--active').classList.remove('portfolio__option--active');
        e.target.parentElement.classList.add('portfolio__option--active');
  
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
  