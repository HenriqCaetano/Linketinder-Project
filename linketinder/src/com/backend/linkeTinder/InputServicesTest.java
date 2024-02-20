package com.backend.linkeTinder;

import org.junit.jupiter.api.Test;

import java.util.LinkedList;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class InputServicesTest {

    @Test
    void testaCadastroNovoCandidato() {
        //Arrange
        Candidato c1 = mock(Candidato.class);
        Candidato c2 = mock(Candidato.class);

        when(c2.getNome()).thenReturn("Henrique");


        LinkedList<Candidato> candidatos = new LinkedList<>();
        candidatos.add(c1);

        //Act
        InputServices.cadastraNovoCandidato(candidatos, c2);

        //Assert
        assertEquals(candidatos.getLast().getNome(), c2.getNome());
    }

    @Test
    void testaCadastroCandidatoPresenteNaLista() {
        //Arrange
        Candidato c1 = mock(Candidato.class);
        Candidato c2 = mock(Candidato.class);
        Candidato c3 = mock(Candidato.class);

        when(c3.getNome()).thenReturn("Vinicius");

        LinkedList<Candidato> candidatos = new LinkedList<>();
        candidatos.add(c1);
        candidatos.add(c2);
        candidatos.add(c3);


        //Act
        InputServices.cadastraNovoCandidato(candidatos, c2);

        //Assert
        assertEquals(candidatos.getLast().getNome(), c3.getNome());
    }

    @Test
    void testaCadastroNovaEmpresa() {
        //Arrange
        Empresa e1 = mock(Empresa.class);
        Empresa e2 = mock(Empresa.class);

        when(e2.getNome()).thenReturn("ZG soluções");


        LinkedList<Empresa> empresas = new LinkedList<>();
        empresas.add(e1);

        //Act
        InputServices.cadastraNovaEmpresa(empresas, e2);

        //Assert
        assertEquals(empresas.getLast().getNome(), e2.getNome());
    }

    @Test
    void testaCadastroEmpresaPresenteNaLista() {
        //Arrange
        Empresa e1 = mock(Empresa.class);
        Empresa e2 = mock(Empresa.class);
        Empresa e3 = mock(Empresa.class);

        when(e3.getNome()).thenReturn("ZG soluções");

        LinkedList<Empresa> empresas = new LinkedList<>();
        empresas.add(e1);
        empresas.add(e2);
        empresas.add(e3);


        //Act
        InputServices.cadastraNovaEmpresa(empresas, e2);

        //Assert
        assertEquals(empresas.getLast().getNome(), e3.getNome());
    }
}