export default function initModal() {

    const buttonAbrir = document.querySelector('[data-modal="abrir"]');
    const buttonFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    if(buttonAbrir && buttonFechar && containerModal) {
        function abrirModal(event) {
            event.preventDefault();
            containerModal.classList.add('ativo');
        }

        function fecharModal() {
            containerModal.classList.remove('ativo');
        }

        function clickForaModal(event) {
            if(event.target === containerModal) {
                fecharModal();
            }
        }

        buttonAbrir.addEventListener('click', abrirModal);
        buttonFechar.addEventListener('click', fecharModal);
        containerModal.addEventListener('click', clickForaModal);
    }
}