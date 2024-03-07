export class Usuario {
    private _nome: string;
    private _email: string;
    private _senha: string;
    private _cep: string;
    private _descricao: string;
    private _competencias: string[];


    constructor(nome: string, email: string, senha: string, cep: string, descricao: string, competencias: string[]) {
        this._nome = nome;
        this._email = email;
        this._senha = senha;

        this._cep = cep;
        this._descricao = descricao;
        this._competencias = competencias;
    }


    get senha(): string {
        return this._senha;
    }

    get nome(): string {
        return this._nome;
    }

    get email(): string {
        return this._email;
    }

    get cep(): string {
        return this._cep;
    }

    get descricao(): string {
        return this._descricao;
    }

    get competencias(): string[] {
        return this._competencias;
    }
}

