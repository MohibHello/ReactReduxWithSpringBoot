package com.demo.integrationapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.integrationapp.entities.EmployeeEntity;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {

	EmployeeEntity findByEmail(String email);
}