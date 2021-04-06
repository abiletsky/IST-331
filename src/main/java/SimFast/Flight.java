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

	public int getHeading() {

		return heading;
	}

	public int getAltitude() {
		return altitude;
	}

	public int getGroundSpeed() {
		return groundSpeed;
	}

	public String getDestination() {
		return destination;
	}

	public String getAircraft() {
		return aircraft;
	}
}
