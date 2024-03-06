package com.senac.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/exercito")
public class ExercitoController {

    @GetMapping("/{soldadoId}")
    public ResponseEntity<String> getSoldadoPorId(@PathVariable("soldadoId") Long soldadoId) {
        // Lógica para obter soldado por ID
        return ResponseEntity.ok("Soldado com ID " + soldadoId);
    }

    @PostMapping
    public ResponseEntity<String> criarSoldado(@RequestBody Soldado soldado) {
        // Lógica para criar um novo soldado
        return ResponseEntity.status(HttpStatus.CREATED).body("Soldado criado: " + soldado.getNome());
    }

    @PutMapping("/{soldadoId}")
    public ResponseEntity<String> atualizarSoldado(@PathVariable("soldadoId") Long soldadoId, @RequestBody Soldado soldado) {
        // Lógica para atualizar soldado por ID
        return ResponseEntity.ok("Soldado com ID " + soldadoId + " atualizado para: " + soldado.getNome());
    }

    @DeleteMapping("/{soldadoId}")
    public ResponseEntity<String> deletarSoldado(@PathVariable("soldadoId") Long soldadoId) {
        // Lógica para deletar soldado por ID
        return ResponseEntity.ok("Soldado com ID " + soldadoId + " deletado com sucesso.");
    }

    @GetMapping("/buscar")
    public ResponseEntity<String> buscarSoldadoPorNome(@RequestParam("nome") String nome) {
        // Lógica para buscar soldado por nome
        return ResponseEntity.ok("Soldado com nome '" + nome + "'");
    }

    // Classe modelo Soldado
    static class Soldado {
        private String nome;
        private String patente;

        // Getters e Setters omitidos para brevidade

        public String getNome() {
            return nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }

        public String getPatente() {
            return patente;
        }

        public void setPatente(String patente) {
            this.patente = patente;
        }
    }
}
