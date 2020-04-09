package com.webapp.restapi;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class RestApiApplication extends SpringBootServletInitializer implements CommandLineRunner {

	// System logging
	protected final Log logger = LogFactory.getLog(getClass());

	public static void main(String[] args) {
		SpringApplication.run(RestApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		// Application startup success
		logger.info("Application Started!");
	}

}
