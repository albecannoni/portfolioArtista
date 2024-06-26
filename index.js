
// Funzione per generare le dropdown list
function generateDropdowns(data) {
    const productionSection = document.getElementById('Prod');
    const buttons = [];

    data.forEach(produzione => {
        const button = document.createElement('button');
        button.classList.add('dropdown-button');
        button.classList.add('anteprimaProd');
        button.textContent = produzione.titolo;
        button.dataset.titolo = produzione.titolo; // Aggiunto il dataset per il titolo
        button.dataset.tipo = produzione.tipo;
        button.dataset.descrizione = produzione.descrizione;
        button.dataset.immagine = produzione.immagine;
        buttons.push(button);

        button.addEventListener('click', () => {
            buttons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.classList.remove('expanded');
                    otherButton.innerHTML = `<p>${otherButton.dataset.titolo}</p>`;
                }
            });

            if (button.classList.contains('expanded')) {
                button.classList.remove('expanded');
                productionSection.style.height = 'auto';
                button.innerHTML = `<p>${button.dataset.titolo}</p>`;
            } else {
                const content = `
                    <h2>${produzione.titolo}</h2>
                    <p>${produzione.tipo}</p>
                    <p>${produzione.descrizione}</p>
                    <img src=${produzione.immagine}> 
                `;
                button.innerHTML = content;
                button.classList.add('expanded');
                productionSection.style.height = '100vh';
            }
        });

        productionSection.appendChild(button);
    });
}


// Chiamata AJAX per ottenere i dati
let urlAPI = 'db/db.json';
let xhr = new XMLHttpRequest();
xhr.open('GET', urlAPI);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let produzioni = JSON.parse(xhr.responseText);
        generateDropdowns(produzioni);
    }
};

// Funzione di chiusura della finestra modale
function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');
    modalOverlay.style.display = 'none';
    modal.style.left = '100%';
}

// Funzione di inizializzazione
function init() {
    underContruction();
    // Otteniamo il riferimento all'elemento .hamburger e alla finestra modale
    const hamburgerButton = document.querySelector('.hamburger');
    const closeModalButton = document.querySelector('.close-modal');
    
    // Aggiungiamo un gestore di eventi per aprire la finestra modale
    hamburgerButton.addEventListener('click', () => {
        const modalOverlay = document.querySelector('.modal-overlay');
        const modal = document.querySelector('.modal');
        modalOverlay.style.display = 'block';
        modal.style.left = '50%';
    });

    // Aggiungiamo un gestore di eventi per chiudere la finestra modale
    closeModalButton.addEventListener('click', closeModal);
    
}
function underContruction(){
    let body = document.querySelector('#body');
    body.innerHTML="sito in costruzione"
}

// Aggiungiamo un gestore di eventi per il caricamento della pagina
window.addEventListener("load", init);
