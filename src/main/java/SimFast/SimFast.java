package SimFast;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class SimFast {

	public static void main(String[] args) {
		SpringApplication.run(SimFast.class, args);
	}

	@Bean
	public List<Flight> getFlights() throws Exception{
		return Arrays.asList(new ObjectMapper().readValue(new ClassPathResource("flight-data.json").getFile(), Flight[].class));
	}

	@Bean
	public List<Fruit> getFruits() throws Exception{
		return Arrays.asList(new ObjectMapper().readValue(new ClassPathResource("fruit-data.json").getFile(), Fruit[].class));
	}
}
