package com.senac.cursos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senac.cursos.entity.Curso;

// Repositório para operações de CRUD no banco de dados
@Repository
public  interface CursoRepository extends JpaRepository<Curso, Long> {

    List<Curso> findByNameAndCategory(String name, String category);

    List<Curso> findByName(String name);

    List<Curso> findByCategory(String category);
}
