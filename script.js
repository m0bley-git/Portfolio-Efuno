const bouton = document.getElementById('bouton');
const menu = document.getElementById('menu');

bouton.addEventListener('click', () => {
    menu.classList.toggle('active'); // affiche/masque le menu
});
