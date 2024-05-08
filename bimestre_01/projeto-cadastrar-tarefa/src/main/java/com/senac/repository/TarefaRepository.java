package com.senac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senac.entity.TarefaEntity;

@Repository
public interface TarefaRepository extends JpaRepository<TarefaEntity, Long>{
    
}
