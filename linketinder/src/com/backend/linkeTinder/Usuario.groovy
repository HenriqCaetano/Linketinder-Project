package com.backend.linkeTinder

import groovy.transform.ToString

@ToString
class Usuario {

    String nome, email, estado, cep, descricao;
    LinkedList<String> competencias;

}
