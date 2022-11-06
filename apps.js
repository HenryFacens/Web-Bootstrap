async function apidata()
{
    const apilink = 'https://apps.tre-sc.jus.br/dadosabertos-api/lista-locais/json';

    const response = await fetch(apilink)
    const datapoint = await response.json()
    console.log(datapoint);

}
