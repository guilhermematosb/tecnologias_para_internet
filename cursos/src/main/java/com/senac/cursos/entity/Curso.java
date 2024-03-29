package com.senac.cursos.entity;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

// Usando Lombok para gerar automaticamente getters, setters, toString, hashCode e equals
@Data
@Entity
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String category;
    private boolean active; // Por padrão, o curso está ativo

    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private Date createdAt;

    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    @Column(nullable = false)
    private Date updatedAt;
}