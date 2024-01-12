document.querySelectorAll('.menu a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        // Verwijder de 'active' klasse van alle links
        document.querySelectorAll('.menu a').forEach(item => {
          item.classList.remove('active');
        });
        
        this.classList.add('active');
      }); b
    });


document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');      

    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('open');
      nav.classList.toggle('active'); 
    });
  });


