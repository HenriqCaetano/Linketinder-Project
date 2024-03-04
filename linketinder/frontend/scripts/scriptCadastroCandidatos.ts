// import {Candidato} from "./Candidato";


const submitButton: HTMLElement = document.getElementById("candidato-submit");
const form:any = document.getElementById("form-candidato")

submitButton.addEventListener("click", (e:MouseEvent) =>{
    e.preventDefault();

    //obtendo informações do formulário
    let formData = new FormData(form);

    let email:string = formData.get("email").toString();
    //aqui seria bom verificar se já existe esse email na lista de candidatos

    let senha:string = formData.get("senha").toString();
    let nome:string = formData.get("nome").toString();
    let estado:string = formData.get("estado").toString();
    let cep:string = formData.get("cep").toString();
    let descricao:string = formData.get("descricao").toString();
    let cpf:string = formData.get("cpf").toString();

    //obtém idade em anos
    let dataNascimento: Date = new Date(formData.get("dataNascimento").toString())
    let idade:number = parseInt(((Date.now() - dataNascimento.valueOf()) / 31557600000).toFixed());

    //obtém as competências e retira espaços em branco
    let competencias:string[] = formData.get("competencias").toString().split(",");
    competencias.forEach((value, index) => {
        competencias[index] = value.trim();
    })

    //constroi o candidato e adiciona à lista de candidatos
})