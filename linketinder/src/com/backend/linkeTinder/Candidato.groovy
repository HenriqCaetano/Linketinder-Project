package com.backend.linkeTinder

import groovy.transform.ToString

@ToString(includePackage = false, includeSuperProperties = true, includeNames = true)
class Candidato extends Usuario {

    String cpf;
    int idade;

}
