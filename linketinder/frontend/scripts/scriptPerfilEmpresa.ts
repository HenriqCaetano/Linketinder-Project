import {Candidato} from "./Candidato";
import Chart from 'chart.js/auto';



const displayCandidatos:HTMLElement = document.getElementById("lista-candidatos");
const listaCandidatos: Candidato[] = localStorage.getItem('listaCandidatos')


//gráfico
type entrada = {
    competencia : string;
    quantidade : number;
}

let dadosGrafico: entrada[] = []



for (const candidato:Candidato of listaCandidatos) {
    displayCandidatos.innerHTML += `<li>Descrição: ${candidato.descricao}, Competências: ${candidato.competencias} <li>`

    for (let competencia of candidato.competencias) {
        for (const key in dadosGrafico) {

        }
    }
}



