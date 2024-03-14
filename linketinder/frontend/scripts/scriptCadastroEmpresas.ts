import {Empresa} from "./Empresa.js";

let listaEmpresas : Empresa[] = [];

const submitButton: HTMLElement = document.getElementById("empresa-submit");
const form:any = document.getElementById("form-empresa")

submitButton.addEventListener("click", (e:MouseEvent) =>{
    e.preventDefault();

    //obtendo informações do formulário
    let formData : FormData= new FormData(form);

    //aqui seria bom verificar se já existe esse email na lista de empresas
    let email:string = formData.get("email").toString();
    let emailRegex : RegExp = new RegExp('\\w+@(\\w+\\.)+\\w{2,4}')
    let emailCheck : boolean = emailRegex.test(email)


    let nome:string = formData.get("nome").toString();
    let nomeRegex : RegExp = new RegExp('^[a-zA-Z\\s]*$','g')
    let nomeCheck : boolean = nomeRegex.test(nome)

    let cep:string = formData.get("cep").toString();
    let cepRegex : RegExp = new RegExp('\\d{5}-\\d{3}')
    let cepCheck : boolean = cepRegex.test(cep)

    let cnpj:string = formData.get("cnpj").toString();
    let cnpjRegex : RegExp = new RegExp('\\d{2}\\.\\d{3}\\.\\d{3}/0001-\\d{2}')
    let cnpjCheck : boolean = cnpjRegex.test(cnpj)

    //verificações dos regex
    if(!emailCheck) alert("email em formato inválido");
    if(!nomeCheck) alert("nome em formato inválido");
    if(!cepCheck) alert("CEP em formato inválido");
    if(!cnpjCheck) alert("CNPJ em formato inválido");


    //entradas que não precisam de regex
    let senha:string = formData.get("senha").toString();
    let pais:string = formData.get("pais").toString();
    let descricao:string = formData.get("descricao").toString();


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