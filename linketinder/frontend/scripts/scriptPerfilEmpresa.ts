import {Candidato} from "./Candidato";
// import Chart from 'chart.js/auto';



const displayCandidatos : HTMLElement = document.getElementById("lista-candidatos");
const listaCandidatos :Candidato[]= JSON.parse(localStorage.getItem('listaCandidatos'))


//construção do objeto do gráfico
type entrada = {
    competencia : string;
    quantidade : number;
}

let dadosGrafico: entrada[] = []

listaCandidatos.forEach((candidato : Candidato) => {
    displayCandidatos.innerHTML += `<li>Descrição: ${candidato.descricao}, Competências: ${candidato.competencias} <li>`
})





