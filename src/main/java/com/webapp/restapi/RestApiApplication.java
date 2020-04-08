package com.webapp.restapi;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.cloud.config.java.CloudScan;
import org.springframework.cloud.config.java.ServiceConnectionFactory;
import org.springframework.cloud.config.java.ServiceScan;
import org.springframework.cloud.service.document.MongoDbFactoryConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;


@SpringBootApplication
public class RestApiApplication extends SpringBootServletInitializer implements CommandLineRunner {
	protected final Log logger = LogFactory.getLog(getClass());

	public static void main(String[] args) {
		SpringApplication.run(RestApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info("Application Started!");
	}

}
