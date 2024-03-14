package com.senac.exercicio_01.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.senac.exercicio_01.entity.Task;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private List<Task> tasks = new ArrayList<>();
    private int nextId = 1;

    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable int id) {
        Optional<Task> optionalTask = tasks.stream().filter(task -> task.getId() == id).findFirst();
        if (optionalTask.isPresent()) {
            return ResponseEntity.ok(optionalTask.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        if (task.getTitle()!= null) {
            
        }
        task.setId(nextId++);
        task.setCreationDate(new Date());
        tasks.add(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(task);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable int id, @RequestBody Task updatedTask) {
        Optional<Task> optionalTask = tasks.stream().filter(task -> task.getId() == id).findFirst();
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.setTitle(updatedTask.getTitle());
            task.setDescription(updatedTask.getDescription());
            task.setCompletionDate(updatedTask.getCompletionDate());
            return ResponseEntity.ok(task);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable int id) {
        Optional<Task> optionalTask = tasks.stream().filter(task -> task.getId() == id).findFirst();
        if (optionalTask.isPresent()) {
            tasks.remove(optionalTask.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

