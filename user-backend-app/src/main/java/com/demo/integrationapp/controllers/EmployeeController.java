package com.demo.integrationapp.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.integrationapp.dtos.EmployeeDTO;
import com.demo.integrationapp.entities.EmployeeEntity;
import com.demo.integrationapp.services.EmployeeService;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin
public class EmployeeController {

	@Autowired
	private EmployeeService service;

	@GetMapping(value = "/test")
	public String testController() {
		return "testing uri";
	}

	@PostMapping(value = "/login", consumes = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<EmployeeEntity> login(@RequestBody EmployeeDTO employeeDTO) {
		EmployeeEntity login;
		try {
			login = service.login(employeeDTO);
		} catch (Exception e) {
			HttpHeaders responseHeaders = new HttpHeaders();
			responseHeaders.set("Header", "Value");
			String message = "" + e.getLocalizedMessage() + "";
			System.out.println(message);
			responseHeaders.set("helllo", message);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).headers(responseHeaders).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).body(login);
	}

	@GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<List<EmployeeEntity>> getEmployees() {

		List<EmployeeEntity> allEmployees = service.getAllEmployees();
		return ResponseEntity.status(HttpStatus.OK).body(allEmployees);
	}

	@GetMapping(value = "/{id}", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<EmployeeEntity> getEmployee(@PathVariable(value = "id") long id) {

		EmployeeEntity employee = service.getEmployee(id);
		return ResponseEntity.status(HttpStatus.OK).body(employee);
	}

	@PostMapping(consumes = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE }, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<EmployeeEntity> createEmployee(@Valid @RequestBody EmployeeDTO employeeDTO) {

		EmployeeEntity employee = service.createEmployee(employeeDTO);
		return ResponseEntity.status(HttpStatus.OK).body(employee);

	}

	@PutMapping(consumes = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE }, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<EmployeeEntity> updateEmployee(@Valid @RequestBody EmployeeDTO employeeDTO) {
		EmployeeEntity employee = service.updateEmployee(employeeDTO);
		return ResponseEntity.status(HttpStatus.OK).body(employee);
	}

	@DeleteMapping(value = "/{id}", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<Long> deleteEmployee(@PathVariable("id") Long id) {
		Long empid = service.deleteEmployee(id);
		return ResponseEntity.status(HttpStatus.OK).body(empid);
	}

}
