import {Empresa} from "./Empresa.js";

let listaEmpresas : Empresa[] = [];
localStorage.setItem("listaEmpresas", JSON.stringify(listaEmpresas));

const submitButton: HTMLElement = document.getElementById("empresa-submit");
const form:any = document.getElementById("form-empresa")

submitButton.addEventListener("click", (e:MouseEvent) =>{
    e.preventDefault();

    //obtendo informações do formulário
    let formData = new FormData(form);

    let email:string = formData.get("email").toString();
    //aqui seria bom verificar se já existe esse email na lista de empresas

    let senha:string = formData.get("senha").toString();
    let nome:string = formData.get("nome").toString();
    let cep:string = formData.get("cep").toString();
    let pais:string = formData.get("pais").toString();
    let descricao:string = formData.get("descricao").toString();
    let cnpj:string = formData.get("cnpj").toString();


    //obtém as competências e retira espaços em branco
    let competencias:string[] = formData.get("competencias").toString().split(",");
    competencias.forEach((value:string, index: number) => {
        competencias[index] = value.trim();
    })

    //constroi a empresa e adiciona à lista de empresas
    let novaEmpresa : Empresa = new Empresa(nome, email, senha, cep, descricao, competencias, cnpj, pais);
    console.log(novaEmpresa);
    listaEmpresas.push(novaEmpresa);
    localStorage.setItem("listaEmpresas", JSON.stringify(listaEmpresas));
})