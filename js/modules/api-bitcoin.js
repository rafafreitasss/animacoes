export default function initApiBitcoin() {

const btcPreco = document.querySelector('.btc-preco');

async function fetchBitcoin() {
    const response = await fetch('https://blockchain.info/ticker');
    const responseJson = await response.json();
    
    btcPreco.innerText = (responseJson.BRL.sell / 10000000).toFixed(5)
    console.log(responseJson)
}

fetchBitcoin()

}