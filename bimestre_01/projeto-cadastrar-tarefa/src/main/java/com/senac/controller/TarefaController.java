package com.senac.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senac.entity.TarefaEntity;
import com.senac.repository.TarefaRepository;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    @Autowired
    TarefaRepository tarefaRepository;
    
    @GetMapping
    public ResponseEntity<List<TarefaEntity>> getAllTasks() {
        List<TarefaEntity> tarefas = tarefaRepository.findAll();
        return ResponseEntity.ok(tarefas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TarefaEntity> getTaskById(@PathVariable Long id) {
        Optional<TarefaEntity> optionalTask = tarefaRepository.findById(id);
        return optionalTask.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TarefaEntity> createTask(@RequestBody TarefaEntity task) {
        TarefaEntity savedTask = tarefaRepository.save(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTask);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TarefaEntity> updateTask(@PathVariable Long id, @RequestBody TarefaEntity updatedTask) {
        Optional<TarefaEntity> optionalTask = tarefaRepository.findById(id);
        if (optionalTask.isPresent()) {
            TarefaEntity task = optionalTask.get();
            task.setTitle(updatedTask.getTitle());
            task.setDescription(updatedTask.getDescription());
            task.setCompletionDate(updatedTask.getCompletionDate());
            TarefaEntity savedTask = tarefaRepository.save(task);
            return ResponseEntity.ok(savedTask);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        if (tarefaRepository.existsById(id)) {
            tarefaRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
