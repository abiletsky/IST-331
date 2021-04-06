package SimFast;

import com.mitchellbosecke.pebble.PebbleEngine;
import com.mitchellbosecke.pebble.template.PebbleTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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

	@GetMapping("/fruit")
	public String index() throws IOException {
		var compiledTemplate = engine.getTemplate("fruit.html");
		var writer = new StringWriter();

		Map<String, Object> context = new HashMap<>();
		context.put("fruits", fruits);

		compiledTemplate.evaluate(writer, context);

		return writer.toString();
	}

	@PostMapping("/hello")
	public String hello() {
		return "Hello World!";
	}
}
