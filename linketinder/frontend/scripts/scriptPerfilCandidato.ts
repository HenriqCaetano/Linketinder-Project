import {Empresa} from "./Empresa";


const displayVagas = document.getElementById("lista-empresas");
const listaEmpresas: Empresa[] = JSON.parse(localStorage.getItem("listaEmpresas"));


for (const empresa of listaEmpresas) {
    displayVagas.innerHTML += `<li>Descrição: ${empresa.descricao}, Competências: ${empresa.competencias}<li>`
}

