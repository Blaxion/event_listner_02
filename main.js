// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
let exo1 = document.querySelector('h1');
exo1.addEventListener('dblclick', () =>{
    exo1.style.color = 'white';
    exo1.style.backgroundColor = 'red';
});


// ### 2. Au hover du h3, son texte rétrécit d'un caractère 

let exo2 = document.querySelector('h3');
exo2.addEventListener('mouseover', () =>{
    exo2.innerText = exo2.innerText.slice(0,exo2.innerText.length-1)
});

// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir
let exo3 = document.querySelector('p');
exo3.addEventListener('click', () =>{
    if (exo3.style.color != 'gold' && exo3.style.backgroundColor != 'blue') {
        exo3.style.color = 'gold';
        exo3.style.backgroundColor = 'blue';
    } else {
        exo3.style.color = 'black';
        exo3.style.backgroundColor = 'white';
    }
    
});

