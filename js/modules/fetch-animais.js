import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {

async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid')

    animaisJson.forEach(animal => {

        //A divAnimal está recebendo o retorno da função createAnimal e passando como parametro o cada animal vindo do forEach.
        const divAnimal = createAnimal(animal)
        numerosGrid.appendChild(divAnimal)
    })

    //Iniciando a animação aqui pra ela ocorrer depois que o FETCH acontecer
    initAnimaNumeros();
 }

//  
 function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('.numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    
    return div;
 }

fetchAnimais('./animaisapi.json')

}
