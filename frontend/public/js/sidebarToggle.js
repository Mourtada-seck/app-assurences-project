/* public/js/sidebarToggle.js */
const select = (el, all = false) => (all
  ? [ ...document.querySelectorAll(el.trim()) ]
  : document.querySelector(el.trim())
);

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = select('#toggle-sidebar');   
  const body      = document.body;               

  if (toggleBtn) {
    toggleBtn.addEventListener('click', e => {
      e.preventDefault();             
      body.classList.toggle('toggle-sidebar');
    });
  }
});



