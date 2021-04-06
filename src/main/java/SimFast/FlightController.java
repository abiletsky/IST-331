package SimFast;

import com.mitchellbosecke.pebble.PebbleEngine;
import com.mitchellbosecke.pebble.template.PebbleTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class FlightController {

	@Autowired
	private List<Flight> flights;
	@Autowired
	private PebbleEngine engine;

	@GetMapping("/")
	public String index() throws IOException {
		PebbleTemplate template = engine.getTemplate("index.html");
		Writer writer = new StringWriter();

		Map<String, Object> context = new HashMap<>();
		context.put("flights", flights);

		template.evaluate(writer, context);

		return writer.toString();
	}
}
