package com.example.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mitchellbosecke.pebble.PebbleEngine;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.core.io.ClassPathResource;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public List<Fruit> getFruits() throws Exception{
		return Arrays.asList(new ObjectMapper().readValue(new ClassPathResource("fruit-data.json").getFile(), Fruit[].class));
	}

//	@Bean
//	@Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
//	public PebbleEngine getPebbleEngine() {
//		return new PebbleEngine.Builder().build();
//	}

}
