package com.backend.linkeTinder

class InputServices {
    static LinkedList<Candidato> obtemCandidatos(File arquivoCandidatos) {
        LinkedList<Candidato> candidatos = new LinkedList<>();
        Scanner leitura = new Scanner(arquivoCandidatos);

        int numCandidatos = leitura.nextLine() as Integer;
        leitura.nextLine();

        for (int i = 0; i < numCandidatos; i++) {

            String nomeAtual = leitura.nextLine();
            String emailAtual = leitura.nextLine();
            String cpfAtual = leitura.nextLine();
            int idadeAtual = leitura.nextLine() as Integer;
            String estadoAtual = leitura.nextLine();
            String cepAtual = leitura.nextLine();
            String descricaoAtual = leitura.nextLine();

            LinkedList<String> competenciasAtuais = new LinkedList<>();
            String[] competenciasSeparadas = leitura.nextLine().split(",")
            competenciasSeparadas.each { competenciasAtuais.add(it) }

            leitura.nextLine()

            Candidato candidatoAtual = new Candidato(nome: nomeAtual, email: emailAtual, cpf: cpfAtual, idade: idadeAtual, estado: estadoAtual, cep: cepAtual, descricao: descricaoAtual, competencias: competenciasAtuais);
            candidatos.add(candidatoAtual);
        }
        return candidatos;


    }

    static LinkedList<Empresa> obtemEmpresas(File arquivoEmpresas) {
        LinkedList<Empresa> empresas = new LinkedList<>();
        Scanner leitura = new Scanner(arquivoEmpresas);

        int numEmpresas = leitura.nextLine() as Integer;
        leitura.nextLine();

        for (i in 0..<numEmpresas) {

            String nomeAtual = leitura.nextLine();
            String emailAtual = leitura.nextLine();
            String cnpjAtual = leitura.nextLine();
            String paisAtual = leitura.nextLine();
            String estadoAtual = leitura.nextLine();
            String cepAtual = leitura.nextLine();
            String descricaoAtual = leitura.nextLine();

            LinkedList<String> competenciasAtuais = new LinkedList<>();
            String[] competenciasSeparadas = leitura.nextLine().split(",")
            competenciasSeparadas.each { competenciasAtuais.add(it) }

            leitura.nextLine()

            Empresa empresaAtual = new Empresa(nome: nomeAtual, email: emailAtual, cnpj: cnpjAtual, pais: paisAtual, estado: estadoAtual, cep: cepAtual, descricao: descricaoAtual, competencias: competenciasAtuais);
            empresas.add(empresaAtual);
        }
        return empresas;

    }
}
