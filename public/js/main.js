// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
let h1 = document.querySelector('h1');
h1.addEventListener('dblclick', () => {
    h1.style.backgroundColor = 'red';
    h1.style.color = 'white';
})
// ### 2. Au hover du h3, son texte rétrécit d'un caractère 
let h3 = document.querySelector('h3');
h3.addEventListener('mouseover', () =>{
    h3.style.color = 'red';
    h3.style.fontSize = '1.1rem';
    
});
// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir
let p = document.querySelector('p');
p.addEventListener('click', () =>{
    if(p.style.backgroundColor == 'blue'){
        p.style.backgroundColor = 'white';
        p.style.color = 'black';
    } else{
        p.style.backgroundColor = 'blue';
        p.style.color = 'gold';
    }
    
})