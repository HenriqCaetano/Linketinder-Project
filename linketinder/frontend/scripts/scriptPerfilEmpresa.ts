import {Candidato} from "./Candidato.js";



const displayCandidatos : HTMLElement = document.getElementById("lista-candidatos");
const listaInformacoesCandidatos:any[]= await JSON.parse(localStorage.getItem("listaCandidatos")); //chegam objetos sem tipo
const listaCandidatos:Candidato[] = []; //lista para guardar os candidatos


//reconstroi os candidatos a partir do localStorage
listaInformacoesCandidatos.forEach(entry =>{
    let novoCandidato:Candidato = new Candidato(entry._nome, entry._email,entry._senha, entry._estado, entry._cep, entry._descricao, entry._competencias, entry._cpf, entry._idade);
    listaCandidatos.push(novoCandidato)
})


//construção do objeto do gráfico
type entrada = {
    competencia : string;
    quantidade : number;
}

let dadosGrafico: entrada[] = []


listaCandidatos.forEach((candidato:Candidato) => {

    candidato.competencias.forEach((competencia:string) => {
        let competenciaDeveSerAdicionada = true;
        for (let i = 0; i < dadosGrafico.length; i++) {
            if(dadosGrafico[i].competencia === competencia){
                dadosGrafico[i].quantidade++;
                competenciaDeveSerAdicionada = false;
                break;
            }
        }
        if(competenciaDeveSerAdicionada){
            let novaEntrada:entrada = {competencia: competencia, quantidade:1};
            dadosGrafico.push(novaEntrada);
        }
    })

})
console.log(dadosGrafico)


// @ts-ignore
new Chart(document.getElementById("grafico-competencias"),
    {
        type: 'bar',
        data: {
            labels: dadosGrafico.map(row => row.competencia),
            datasets: [
                {
                    label: 'Quantia de candidatos por competência',
                    data: dadosGrafico.map(row => row.quantidade)
                }
            ]
        }
    })

listaCandidatos.forEach((candidato : Candidato) => {
    displayCandidatos.innerHTML += `<li>Descrição: ${candidato.descricao}, Competências: ${candidato.competencias} <li>`
})





