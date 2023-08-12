

function test() {
    alert("TESTP");
}

function init() {
    test();
}

// Otteniamo il riferimento all'elemento .hamburger e alla finestra modale
const hamburgerButton = document.querySelector('.hamburger');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalButton = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

// Aggiungiamo un gestore di eventi per aprire la finestra modale
hamburgerButton.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    modal.style.left = '50%';
});

// Aggiungiamo un gestore di eventi per chiudere la finestra modale
closeModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    modal.style.left = '100%';
});


window.addEventListener("load", init);
