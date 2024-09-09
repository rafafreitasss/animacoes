export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    //Se o atributo outside já existir ele não vai adicionar mais eventos de click. Essa parte é apenas pra otimizar e não evento de click cada vez que o menu for clicado.
    if(!element.hasAttribute(outside)) {
        // colocando a função pra todos os eventos que tiver
        events.forEach(userEvent => {
        // Vai executar depois da fase de Bublle.
          setTimeout(() => html.addEventListener(userEvent, handleOutsideClick))
        });

        element.setAttribute(outside, '');
    }

    function handleOutsideClick(event) {
        // Se essa condição for falsa executa o callback, significa que ta clicando fora do this(menu) e vai remover a classe active.
        if(!element.contains(event.target)) {
            element.removeAttribute(outside);

            //remove o evento depois de executado
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
              })

            callback();
        }
    }
}