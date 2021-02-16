package com.demo.integrationapp.services;

import java.util.Base64;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.integrationapp.dtos.EmployeeDTO;
import com.demo.integrationapp.entities.EmployeeEntity;
import com.demo.integrationapp.repositories.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private static final Logger LOGGER = LogManager.getLogger(EmployeeServiceImpl.class);

	Base64.Encoder encoder = Base64.getUrlEncoder();

	Base64.Decoder decoder = Base64.getUrlDecoder();

	@Autowired
	private EmployeeRepository empRepository;

	@Override
	public EmployeeEntity createEmployee(EmployeeDTO employeeDTO) {

		LOGGER.info("service initiated for create {}", employeeDTO);

		EmployeeEntity entity = new EmployeeEntity();
		entity.setFirstName(employeeDTO.getFirstName());
		entity.setLastName(employeeDTO.getLastName());
		entity.setDesignation(employeeDTO.getDesignation());
		entity.setAddress(employeeDTO.getAddress());
		entity.setEmail(employeeDTO.getEmail());
		entity.setActive(employeeDTO.isActive());

		entity.setPassword(encoder.encodeToString(employeeDTO.getPassword().getBytes()));

		LOGGER.info("persisting entity {}", employeeDTO);
		EmployeeEntity createdEmployeeEntity = empRepository.save(entity);
		LOGGER.info("persisted entity successfully {}", createdEmployeeEntity);
		return createdEmployeeEntity;
	}

	@Override
	public EmployeeEntity updateEmployee(EmployeeDTO employeeDTO) {

		LOGGER.info("service initiated for update {}", employeeDTO);
		EmployeeEntity entity = empRepository.findById(employeeDTO.getEmpid()).orElseGet(EmployeeEntity::new);

		entity.setFirstName(employeeDTO.getFirstName());
		entity.setLastName(employeeDTO.getLastName());
		entity.setDesignation(employeeDTO.getDesignation());
		entity.setAddress(employeeDTO.getAddress());
		entity.setExitDate(employeeDTO.getExitDate());
		entity.setActive(employeeDTO.isActive());

		LOGGER.info("persisting entity {}", employeeDTO);
		EmployeeEntity updatedEmployeeEntity = empRepository.save(entity);

		LOGGER.info("updating entity successfully {}", updatedEmployeeEntity);
		return updatedEmployeeEntity;
	}

	@Override
	public EmployeeEntity getEmployee(long id) {
		LOGGER.info("service initiated for get Employee {}", id);
		EmployeeEntity employee = empRepository.findById(id).get();
		LOGGER.info("fetched entity successfully {}", employee);
		return employee;
	}

	@Override
	public Long deleteEmployee(long id) {
		LOGGER.info("service initiated for deleteEmployee with id {}", id);
		EmployeeEntity employeeEntity = empRepository.findById(id).get();

		if (employeeEntity != null) {
			empRepository.deleteById(id);
			LOGGER.info("deleted Employee with id {}", id);
			return employeeEntity.getId();
		}
		LOGGER.info("id not found", id);
		return null;
	}

	@Override
	public List<EmployeeEntity> getAllEmployees() {
		LOGGER.info("service initiated for getAllEmployees");
		return empRepository.findAll();
	}

	@Override
	public EmployeeEntity login(EmployeeDTO employeeDTO) {

		EmployeeEntity employee = empRepository.findByEmail(employeeDTO.getEmail());
		String decodedPassword = new String(decoder.decode(employee.getPassword()));

		if (employee != null && employeeDTO.getPassword().equals(decodedPassword)) {
			return employee;
		} else {
			throw new RuntimeException("User Not Found");
		}
	}

	@Override
	public EmployeeEntity register(EmployeeDTO employeeDTO) {
		return createEmployee(employeeDTO);
	}

}
