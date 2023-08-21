// Chiamata AJAX per ottenere i dati
let urlAPI = 'db/db.json';
let xhr = new XMLHttpRequest();
xhr.open('GET', urlAPI);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let produzioni = JSON.parse(xhr.responseText);

        // Inizializza un array per i dati ottenuti
        let produzioniArray = [];

        // Pusha i dati ottenuti nell'array
        produzioni.forEach(element => {
            produzioniArray.push({
                titolo: element.titolo,
                tipo: element.tipo,
                descrizione: element.descrizione
            });
        });

        // Stampa i dati nell'HTML come lista
        let productionList = document.querySelector('.production-list');

        produzioniArray.forEach(produzione => {
            let listItem = document.createElement('li');
            listItem.innerHTML = `
                <h2>${produzione.titolo}</h2>
                <p>${produzione.tipo}</p>
                <p>${produzione.descrizione}</p>
            `;
            productionList.classList.add('bg-secondario');
            productionList.appendChild(listItem);

            // Aggiungi gestore di eventi al click sulla <li>
            listItem.addEventListener('click', () => {
                alert(`Hai cliccato su:\nTitolo: ${produzione.titolo}\nTipo: ${produzione.tipo}\nDescrizione: ${produzione.descrizione}`);
            });
        });

        // Funzione di inizializzazione
        init();
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

// Aggiungiamo un gestore di eventi per il caricamento della pagina
window.addEventListener("load", init);
