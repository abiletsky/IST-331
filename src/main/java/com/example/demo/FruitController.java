package com.example.demo;

import com.mitchellbosecke.pebble.PebbleEngine;
import com.mitchellbosecke.pebble.template.PebbleTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class FruitController {

	@Autowired
	private List<Fruit> fruits;
	@Autowired
	private PebbleEngine engine;

	@GetMapping("/")
	public String index() throws IOException {
		PebbleTemplate compiledTemplate = engine.getTemplate("Index");
		Writer writer = new StringWriter();

		Map<String, Object> context = new HashMap<>();
		context.put("fruits", fruits);

		compiledTemplate.evaluate(writer, context);

		return writer.toString();
	}
}
