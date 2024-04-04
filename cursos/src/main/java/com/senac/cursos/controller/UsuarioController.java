package com.senac.cursos.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senac.cursos.entity.Usuario;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @PostMapping
    public void create(@Valid @RequestBody Usuario usuario) {
        System.out.println("Candidato");
        System.out.println(usuario.getEmail());
    }

}
