// Elementos HTML
let title = document.getElementById("title");
let textExcuse = document.querySelector(".textExcuse");
let buttonGenerate = document.querySelector("#buttonGenerate");

// Arrays para generar excusas
let artic = ['Mi', 'El'];
let who = ['perro', 'hamster', 'hermano', 'padre'];
let verb = ['se comió', 'se meó', 'me rompió', 'me perdió'];
let obj = ['mi casa', 'mis llaves de casa', 'el móvil', 'los cuadernos'];

// Evento para generar una nueva excusa al hacer clic en el botón
buttonGenerate.addEventListener('click', () => {
    // Generar números aleatorios
    let numArtic = Math.floor(Math.random() * artic.length);
    let numWho = Math.floor(Math.random() * who.length);
    let numVerb = Math.floor(Math.random() * verb.length);
    let numObj = Math.floor(Math.random() * obj.length);

    // Generar y mostrar la excusa
    textExcuse.innerText = `${artic[numArtic]} ${who[numWho]} ${verb[numVerb]} ${obj[numObj]}`;
});
