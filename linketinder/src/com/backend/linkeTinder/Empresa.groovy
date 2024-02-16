package com.backend.linkeTinder

import groovy.transform.ToString

@ToString(includePackage = false, includeSuperProperties = true, includeNames = true)
class Empresa extends Usuario {

    String cnpj, pais;
}
