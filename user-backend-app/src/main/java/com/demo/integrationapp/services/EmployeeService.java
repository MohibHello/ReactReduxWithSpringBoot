package com.demo.integrationapp.services;

import java.util.List;

import com.demo.integrationapp.dtos.EmployeeDTO;
import com.demo.integrationapp.entities.EmployeeEntity;

public interface EmployeeService {
	
	public EmployeeEntity login(EmployeeDTO employeeDTO);
	
	public EmployeeEntity register(EmployeeDTO  employeeDTO);

	public EmployeeEntity createEmployee(EmployeeDTO employeeDTO);

	public EmployeeEntity updateEmployee(EmployeeDTO employeeDTO);

	public EmployeeEntity getEmployee(long id);

	public List<EmployeeEntity> getAllEmployees();

	public Long deleteEmployee(long id);

}
