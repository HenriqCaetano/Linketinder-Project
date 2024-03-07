import {Usuario} from "./Usuario.js";

export class Candidato extends Usuario{
    private _cpf: string;
    private _idade: number;
    private _estado: string;


    constructor(nome: string, email: string, senha: string, estado: string, cep: string, descricao: string, competencias: string[], cpf: string, idade: number) {
        super(nome, email, senha, cep, descricao, competencias);
        this._cpf = cpf;
        this._idade = idade;
        this._estado = estado;
    }


    get cpf(): string {
        return this._cpf;
    }

    get idade(): number {
        return this._idade;
    }

    get estado(): string {
        return this._estado;
    }
}