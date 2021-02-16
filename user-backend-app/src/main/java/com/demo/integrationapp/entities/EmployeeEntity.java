package com.demo.integrationapp.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class EmployeeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String firstName;

	private String lastName;

	private String designation;

	private String email;

	private String password;

	private String address;

	@CreationTimestamp
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date joiningDate;

	private Date exitDate;

	private boolean active = true;

	public long getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(Date joiningDate) {
		this.joiningDate = joiningDate;
	}

	public Date getExitDate() {
		return exitDate;
	}

	public void setExitDate(Date exitDate) {
		this.exitDate = exitDate;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "EmployeeEntity [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", designation="
				+ designation + ", email=" + email + ", address=" + address + ", joiningDate=" + joiningDate
				+ ", exitDate=" + exitDate + ", active=" + active + "]";
	}

}
