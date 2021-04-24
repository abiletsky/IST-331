package SimFast;

public class Flight {
	private long id;
	private long startTime;
	private String tailNumber;
	private int startingX;
	private int startingY;
	private int heading;
	private int altitude;
	private int groundSpeed;
	private String destination;
	private String aircraft;
	private boolean endPhl;
	private String depAirport;
	private String squawk;
	private String flightPlanId;

	public long getId() {
		return id;
	}

	public long getStartTime() {

		return startTime;
	}

	public String getTailNumber() {

		return tailNumber;
	}

	public int getStartingX() {

		return startingX;
	}

	public int getStartingY() {
		return startingY;
	}

	public String getHeading() {
		return String.format("%03d", heading);
	}

	public String getAltitude() {
		return String.format("%03d", altitude);
	}

	public String getGroundSpeed() {
		return String.format("%03d", groundSpeed);
	}

	public String getDestination() {
		return destination;
	}

	public String getAircraft() {
		return aircraft;
	}

	public boolean getEndPhl() {
		return endPhl;
	}

	public String getDepAirport() {
		return depAirport;
	}

	public String getSquawk() {
		return squawk;
	}

	public String getFlightPlanId() {
		return flightPlanId;
	}

}
