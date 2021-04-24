package SimFast;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

@SpringBootApplication
public class SimFast {

	public static void main(String[] args) {
		SpringApplication.run(SimFast.class, args);
	}

	@Bean
	public List<Flight> getFlights() throws Exception {
		List<Flight> flights = Arrays.asList(new ObjectMapper().readValue(new ClassPathResource("flight-data.json").getFile(), Flight[].class));
		flights.sort(Comparator.comparingLong(Flight::getStartTime));
		return flights;
	}
}
