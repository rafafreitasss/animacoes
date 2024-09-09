export default function initAnimaNumeros() {

 function animaNumeros() {  
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
        const total = +numero.innerText;
        const incremento = Math.floor(total / 100);

        let start = 0;
        const timer = setInterval(() => {
            start = start + incremento;
            numero.innerText = start
            if(start > total) {
                // Vai passar tão rápido que quando parar não vai tá no número certo. Por isso coloquei numero.innerText = total
                numero.innerText = total;
                clearInterval(timer);
            }
        }, 25 * Math.random())
    })
 }
    // O parâmetro dessa função é a mutação em si
    function handleMutation(mutation) {
        if(mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumeros()
        }
    }

    const observerTarget = document.querySelector('.numeros')
    const observer = new MutationObserver(handleMutation);

    // Primeiro argumento é o que será observado. O segundo é indicando que vai observar mudança de atributo
    observer.observe(observerTarget, {attributes: true});
}