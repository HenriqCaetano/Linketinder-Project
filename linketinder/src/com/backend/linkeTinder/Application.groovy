package com.backend.linkeTinder

class Application {
    static void main(String[] args) {
        //criar 5 candidatos
        //criar 5 empresas

        LinkedList<Candidato> candidatos;
        LinkedList<Empresa> empresas
        try {
            File arquivoCandidatos = new File("src/listOfCandidates");
            File arquivoEmpresas = new File("src/listOfCompanies");
            candidatos = InputServices.obtemCandidatos(arquivoCandidatos);
            empresas = InputServices.obtemEmpresas(arquivoEmpresas);

        }
        catch (FileNotFoundException e) {
            e.printStackTrace()
        }

        Scanner input = new Scanner(System.in);

        while (true) {
            println "1. Listar candidatos cadastrados"
            println "2. Listar empresas cadastradas"
            println "3. Fechar aplicação"

            try {
                int userInput = input.nextLine() as Integer

                if (userInput == 1) {
                    candidatos.each { println it }
                } else if (userInput == 2) {
                    empresas.each { println(it) }
                } else if (userInput == 3) {
                    break;
                } else {
                    println "Entrada inválida"
                }
            }
            catch (Exception e) {
                println "Entrada inválida"
            }
        }
    }
}
