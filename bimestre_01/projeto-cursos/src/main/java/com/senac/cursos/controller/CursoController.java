package com.senac.cursos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.senac.cursos.entity.Curso;
import com.senac.cursos.repository.CursoRepository;

// Controlador REST para manipulação dos cursos
@RestController
@RequestMapping("/cursos")
public class CursoController {

    @Autowired
    CursoRepository cursoRepository;

    @PostMapping
    public ResponseEntity<Curso> createCurso(@RequestBody Curso curso) {
        curso.setActive(true); // Por padrão, o curso está ativo ao ser criado
        Curso novoCurso = cursoRepository.save(curso);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoCurso);
    }

    @GetMapping
    public ResponseEntity<List<Curso>> getCursos(@RequestParam(required = false) String name,
                                                  @RequestParam(required = false) String category) {
        List<Curso> cursos;
        if (name != null && category != null) {
            cursos = cursoRepository.findByNameAndCategory(name, category);
        } else if (name != null) {
            cursos = cursoRepository.findByName(name);
        } else if (category != null) {
            cursos = cursoRepository.findByCategory(category);
        } else {
            cursos = cursoRepository.findAll();
        }
        return ResponseEntity.ok(cursos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Curso> updateCurso(@PathVariable Long id, @RequestBody Curso curso) {
        Curso existingCurso = cursoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Curso não encontrado"));

        if (curso.getName() != null) {
            existingCurso.setName(curso.getName());
        }
        if (curso.getCategory() != null) {
            existingCurso.setCategory(curso.getCategory());
        }

        Curso cursoAtualizado = cursoRepository.save(existingCurso);
        return ResponseEntity.ok(cursoAtualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCurso(@PathVariable Long id) {
        cursoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/active")
    public ResponseEntity<Curso> toggleCursoActiveStatus(@PathVariable Long id) {
        Curso curso = cursoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Curso não encontrado"));
        curso.setActive(!curso.isActive()); // Alternar entre ativo e inativo
        Curso cursoAtualizado = cursoRepository.save(curso);
        return ResponseEntity.ok(cursoAtualizado);
    }
}