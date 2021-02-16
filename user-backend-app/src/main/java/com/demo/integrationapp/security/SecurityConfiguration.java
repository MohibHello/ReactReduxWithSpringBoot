package com.demo.integrationapp.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.authorizeRequests().mvcMatchers("/").permitAll().and().authorizeRequests()
				.mvcMatchers("/console/**").permitAll();
		httpSecurity.headers().frameOptions().disable();
		httpSecurity.csrf().disable().authorizeRequests().anyRequest().anonymous().and().httpBasic().disable();
	}
}
