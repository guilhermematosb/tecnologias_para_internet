package com.senac.cursos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing // Habilita a auditoria JPA para preencher automaticamente created_at e updated_at
public class CursosApplication {

	public static void main(String[] args) {
		SpringApplication.run(CursosApplication.class, args);
	}

}
