import {Usuario} from "./Usuario";

export class Candidato extends Usuario{
    private _cpf: string;
    private _idade: number;


    constructor(nome: string, email: string, senha: string, estado: string, cep: string, descricao: string, competencias: string[], cpf: string, idade: number) {
        super(nome, email, senha, estado, cep, descricao, competencias);
        this._cpf = cpf;
        this._idade = idade;
    }


    get cpf(): string {
        return this._cpf;
    }

    get idade(): number {
        return this._idade;
    }
}