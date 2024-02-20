package com.backend.linkeTinder

class Application {
    static void main(String[] args) {
        //criar 5 candidatos
        //criar 5 empresas

        LinkedList<Candidato> candidatos
        LinkedList<Empresa> empresas

        try {
            File arquivoCandidatos = new File("src/listOfCandidates")
            File arquivoEmpresas = new File("src/listOfCompanies")
            candidatos = InputServices.obtemCandidatos(arquivoCandidatos)
            empresas = InputServices.obtemEmpresas(arquivoEmpresas)
        }
        catch (FileNotFoundException e) {
            e.printStackTrace()
            return
        }

        Scanner input = new Scanner(System.in)

        //uso de arquivos para simular entradas do usuário
        File cadastroCandidatos = new File("src/cadastroNovosCandidatos")
        File cadastroEmpresas = new File("src/cadastroNovasEmpresas")
        Scanner leituraCadastroCandidatos = new Scanner(cadastroCandidatos)
        Scanner leituraCadastroEmpresas = new Scanner(cadastroEmpresas)

        while (true) {
            println "1. Listar candidatos cadastrados"
            println "2. Listar empresas cadastradas"
            println "3. Adicionar novo candidato"
            println "4. Adicionar nova empresa"
            println "5. Fechar aplicação"

            try {
                int userInput = input.nextLine() as Integer

                if (userInput == 1) candidatos.each { println it }
                else if (userInput == 2) empresas.each { println(it) }

                else if (userInput == 3) {
                    Candidato novoCandidato = InputServices.constroiCandidatoViaArquivo(leituraCadastroCandidatos)
                    InputServices.cadastraNovoCandidato(candidatos, novoCandidato)
                } else if (userInput == 4) {
                    Empresa novaEmpresa = InputServices.constroiEmpresaViaArquivo(leituraCadastroEmpresas)
                    InputServices.cadastraNovaEmpresa(empresas, novaEmpresa)
                } else if (userInput == 5) break
                else println "Entrada inválida"
            }
            catch (Exception e) {
                e.print("Entrada inválida")
            }
        }
    }
}
