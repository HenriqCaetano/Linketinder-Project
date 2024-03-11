import {Empresa} from "./Empresa";
import {Candidato} from "./Candidato";


const displayVagas = document.getElementById("lista-empresas");

const listaInformacoesEmpresas:any[]= await JSON.parse(localStorage.getItem("listaEmpresas")); //chegam objetos sem tipo
const listaEmpresas:Empresa[] = []; //lista para guardar as empresas


//reconstroi as empresas a partir do localStorage
listaInformacoesEmpresas.forEach(entry =>{
    let novaEmpresa:Empresa = new Empresa(entry._nome,entry._email, entry._senha, entry._cep, entry._descricao, entry._competencias, entry._cnpj, entry._pais);
    listaEmpresas.push(novaEmpresa)
})


for (const empresa of listaEmpresas) {
    displayVagas.innerHTML += `<li>Descrição: ${empresa.descricao}, Competências: ${empresa.competencias}<li>`
}

