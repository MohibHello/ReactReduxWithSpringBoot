package com.demo.integrationapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class UserBackendAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserBackendAppApplication.class, args);
	}

	@Bean
	public BCryptPasswordEncoder bCrypttEncoder() {
		return new BCryptPasswordEncoder();
	}


}
