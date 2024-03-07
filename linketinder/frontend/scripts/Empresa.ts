import {Usuario} from "./Usuario.js";

export class Empresa extends Usuario{
    private _cnpj: string;
    private _pais: string;


    constructor(nome: string, email: string, senha: string, cep: string, descricao: string, competencias: string[], cnpj: string, pais: string) {
        super(nome, email, senha, cep, descricao, competencias);
        this._cnpj = cnpj;
        this._pais = pais;
    }


    get cnpj(): string {
        return this._cnpj;
    }

    get pais(): string {
        return this._pais;
    }
}