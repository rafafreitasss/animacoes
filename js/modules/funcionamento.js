export default function initFuncionamento() {

const funcionamento = document.querySelector('[data-semana]');
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

// Se for diferente de -1 quer dizer que é verdadeiro
const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

const horarioAberto = (horarioAgora >= 8 && horarioAgora < 18);

if(semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
}
}