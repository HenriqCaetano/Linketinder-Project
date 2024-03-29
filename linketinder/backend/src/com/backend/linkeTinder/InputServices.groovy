package com.backend.linkeTinder

class InputServices {
    static LinkedList<Candidato> obtemCandidatos(File arquivoCandidatos) {
        LinkedList<Candidato> candidatos = new LinkedList<>()
        Scanner leitura = new Scanner(arquivoCandidatos)
        int numCandidatos = leitura.nextLine() as Integer

        for (i in 0..<numCandidatos) {
            leitura.nextLine()
            Candidato candidatoAtual = constroiCandidatoViaArquivo(leitura)
            candidatos.add(candidatoAtual)
        }
        candidatos
    }

    static Candidato constroiCandidatoViaArquivo(Scanner leitura) {

        String nomeAtual = leitura.nextLine()
        String emailAtual = leitura.nextLine()
        String cpfAtual = leitura.nextLine()
        int idadeAtual = leitura.nextLine() as Integer
        String estadoAtual = leitura.nextLine()
        String cepAtual = leitura.nextLine()
        String descricaoAtual = leitura.nextLine()

        LinkedList<String> competenciasAtuais = new LinkedList<>()
        String[] competenciasSeparadas = leitura.nextLine().split(",")
        competenciasSeparadas.each { competenciasAtuais.add(it) }


        Candidato candidato = new Candidato(nome: nomeAtual, email: emailAtual, cpf: cpfAtual, idade: idadeAtual, estado: estadoAtual, cep: cepAtual, descricao: descricaoAtual, competencias: competenciasAtuais)
        candidato
    }

    static LinkedList<Empresa> obtemEmpresas(File arquivoEmpresas) {
        LinkedList<Empresa> empresas = new LinkedList<>()
        Scanner leitura = new Scanner(arquivoEmpresas)

        int numEmpresas = leitura.nextLine() as Integer

        for (i in 0..<numEmpresas) {
            leitura.nextLine()
            Empresa empresaAtual = constroiEmpresaViaArquivo(leitura)
            empresas.add(empresaAtual)
        }
        empresas
    }

    static Empresa constroiEmpresaViaArquivo(Scanner leitura) {

        String nomeAtual = leitura.nextLine()
        String emailAtual = leitura.nextLine()
        String cnpjAtual = leitura.nextLine()
        String paisAtual = leitura.nextLine()
        String estadoAtual = leitura.nextLine()
        String cepAtual = leitura.nextLine()
        String descricaoAtual = leitura.nextLine()

        LinkedList<String> competenciasAtuais = new LinkedList<>()
        String[] competenciasSeparadas = leitura.nextLine().split(",")
        competenciasSeparadas.each { competenciasAtuais.add(it) }

        Empresa empresa = new Empresa(nome: nomeAtual, email: emailAtual, cnpj: cnpjAtual, pais: paisAtual, estado: estadoAtual, cep: cepAtual, descricao: descricaoAtual, competencias: competenciasAtuais)
        return empresa
    }

    static LinkedList<Candidato> cadastraNovoCandidato(LinkedList<Candidato> candidatosAtuais, Candidato novoCandidato) {
        if (!candidatosAtuais.contains(novoCandidato)) {
            candidatosAtuais.add(novoCandidato)
        } else println "Candidato já existente no sistema"

        return candidatosAtuais
    }

    static LinkedList<Empresa> cadastraNovaEmpresa(LinkedList<Empresa> empresasAtuais, Empresa empresa) {
        if (!empresasAtuais.contains(empresa)) {
            empresasAtuais.add(empresa)
        } else println "Empresa já existente no sistema"

        return empresasAtuais
    }
}
