package com.backend.linkeTinder

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@ToString(includePackage = false, includeSuperProperties = true, includeNames = true)
@EqualsAndHashCode
class Candidato extends Usuario {
    String cpf
    int idade
}
