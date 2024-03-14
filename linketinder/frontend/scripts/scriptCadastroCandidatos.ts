import {Candidato} from "./Candidato.js";


let listaCandidatos : Candidato[] = [];

const submitButton: HTMLElement = document.getElementById("candidato-submit");
const form:any = document.getElementById("form-candidato")

submitButton.addEventListener("click", (e:MouseEvent) =>{
    e.preventDefault();

    //obtendo informações do formulário
    let formData = new FormData(form);

    //aqui seria bom verificar se já existe esse email na lista de candidatos
    let email:string = formData.get("email").toString();
    let emailRegex : RegExp = new RegExp('\\w+@(\\w+\\.)+\\w{2,4}');
    let emailCheck : boolean = emailRegex.test(email);

    let nome:string = formData.get("nome").toString();
    let nomeRegex : RegExp = new RegExp('^[a-zA-Z\\s]*$','g');
    let nomeCheck : boolean = nomeRegex.test(nome);


    let cep:string = formData.get("cep").toString();
    let cepRegex : RegExp = new RegExp('\\d{5}-\\d{3}');
    let cepCheck : boolean = cepRegex.test(cep);


    let cpf:string = formData.get("cpf").toString();
    let cpfRegex : RegExp = new RegExp('\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}');
    let cpfCheck : boolean = cpfRegex.test(cpf);

    //verificações dos regex
    if(!emailCheck) alert("email em formato inválido");
    if(!nomeCheck) alert("nome em formato inválido");
    if(!cepCheck) alert("CEP em formato inválido");
    if(!cpfCheck) alert("CPF em formato inválido");


    //entradas que não demandam regex

    let senha:string = formData.get("senha").toString();
    //obtém idade em anos
    let dataNascimento: Date = new Date(formData.get("dataNascimento").toString())
    let idade:number = parseInt(((Date.now() - dataNascimento.valueOf()) / 31557600000).toFixed());

    let estado:string = formData.get("estado").toString();
    let descricao:string = formData.get("descricao").toString();

    //obtém as competências e retira espaços em branco
    let competencias:string[] = formData.get("competencias").toString().split(",");
    competencias.forEach((value: string, index: number) => {
        competencias[index] = value.trim();
    })



    //constroi o candidato e adiciona à lista de candidatos
    let novoCandidato : Candidato = new Candidato(nome, email, senha,estado, cep, descricao, competencias, cpf, idade);
    console.log(novoCandidato);
    listaCandidatos.push(novoCandidato);
    localStorage.setItem("listaCandidatos", JSON.stringify(listaCandidatos));
})