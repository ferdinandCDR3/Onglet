const boutonsOnglets = document.querySelectorAll('.onglets li a');
const formulaires = document.querySelectorAll('.contenu > div');

boutonsOnglets.forEach(boutonOnglet => {
    boutonOnglet.addEventListener('click', (event) => {
        event.preventDefault();

        const idFormulaire = event.target.getAttribute('href');
        const formulaireCible = document.querySelector(idFormulaire);

        formulaires.forEach(formulaire => {
            formulaire.classList.remove('active');
        });

        formulaireCible.classList.add('active');
    });
});