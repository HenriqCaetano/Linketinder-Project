import {Empresa} from "./Empresa";


const displayVagas = document.getElementById("");
const listaEmpresas: Empresa[] = localStorage.getItem("listaEmpresas");



for (const empresa:Empresa of listaEmpresas) {
    displayVagas.innerHTML += `<li>Descrição: ${empresa.descricao}, Competências: ${empresa.competencias} <li>`
}

