export default function initTooltip() {

    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    })

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);

        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
    }

    // Metodo novo onde estou declarando um objeto ao invés de uma função de callback. 
    // Pra isso é necessário usar esse método handleEvent dentro do objeto.
    const onMouseLeave = {
        tooltipBox: '',
        element: '',
        handleEvent() {
            this.tooltipBox.remove();
            // Não precisaria desse abaixo pro código funcionar, porém ele serve pra tirar a função completamente da aplicação.
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }

    // function onMouseLeave() {
    //     tooltipBox.remove();
    // }

    const onMouseMove = {
        handleEvent(event) {
            // Verificando onde o mouse passou pra adicionar a div naquela região e andar com o mouse
            // Os 20 no meio é pra somar 20px pra caixa não ficar piscando
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        // Na const text está puxando o valor definido na aria-label no html.
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;

        // Adicionando a div criada ao final do body
        document.body.appendChild(tooltipBox);
        return tooltipBox
    }

}