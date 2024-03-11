import {Candidato} from "./Candidato.js";
import {Usuario} from "./Usuario.js";
// import Chart from 'chart.js/auto';



const displayCandidatos : HTMLElement = document.getElementById("lista-candidatos");
const listaCandidatos :Candidato[]= JSON.parse(localStorage.getItem("listaCandidatos"))


//construção do objeto do gráfico
type entrada = {
    competencia : string;
    quantidade : number;
}

let dadosGrafico: entrada[] = []


console.log(listaCandidatos)
listaCandidatos.forEach((candidato:Candidato) => {
    console.log(candidato.competencias)

    // candidato.competencias.forEach((competencia:string) => {
    //     let competenciaDeveSerAdicionada = true;
    //     for (let i = 0; i < dadosGrafico.length; i++) {
    //         if(dadosGrafico[i].competencia === competencia){
    //             dadosGrafico[i].quantidade++;
    //             competenciaDeveSerAdicionada = false;
    //             break;
    //         }
    //     }
    //     if(competenciaDeveSerAdicionada){
    //         let novaEntrada:entrada = {competencia: competencia, quantidade:1};
    //         dadosGrafico.push(novaEntrada);
    //     }
    // })

})
console.log(dadosGrafico)

listaCandidatos.forEach((candidato : Candidato) => {
    displayCandidatos.innerHTML += `<li>Descrição: ${candidato.descricao}, Competências: ${candidato.competencias} <li>`
})





