package com.demo.integrationapp.dtos;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

public class EmployeeDTO {

	private long empid;

	@Size(max = 20, min = 3, message = "firstname less than 20 and greater than 3")
	private String firstName;

	@Size(max = 20, min = 3, message = "lastname less than 20 and greater than 3")
	private String lastName;

	@Size(max = 20, message = "designation less than 20")
	private String designation;

	@Email
	private String email;

	private String password;

	@Size(max = 120, message = "address less than 120")
	private String address;

	private Date exitDate;

	private boolean active = true;

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

	public long getEmpid() {
		return empid;
	}

	public void setEmpid(long empid) {
		this.empid = empid;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPassword() {
		return password;
	}

	@Override
	public String toString() {
		return "EmployeeDTO [empid=" + empid + ", firstName=" + firstName + ", lastName=" + lastName + ", designation="
				+ designation + ", email=" + email + ", address=" + address + ", exitDate=" + exitDate + ", active="
				+ active + "]";
	}
}
