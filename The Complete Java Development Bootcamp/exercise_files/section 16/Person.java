import java.util.Arrays;

public class Person {

  private String name;
  private String nationality;
  private String dateOfBirth;
  private String[] passport;
  private int seatNumber;

  // Class Constructor Function
  public Person(
      String name,
      String nationality,
      String dateOfBirth,
      int seatNumber) {
    this.name = name;
    this.nationality = nationality;
    this.dateOfBirth = dateOfBirth;
    this.seatNumber = seatNumber;
    this.passport = new String[3];
  }

  // Class Copy Constructor Function
  public Person(Person source) {
    this.name = source.name;
    this.nationality = source.nationality;
    this.dateOfBirth = source.dateOfBirth;
    this.seatNumber = source.seatNumber;
    this.passport = new String[3];
  }

  public boolean applyPassport() {
    int number = (int) (Math.random() * 2);
    return number == 1;
  }

  public void chooseSeat() {
    this.seatNumber = (int) (Math.random() * 11 + 1);
  }

  public String[] getPassport() {
    return Arrays.copyOf(this.passport, this.passport.length);
    // this.passport =
    // new String[] {
    // this.getName(),
    // this.getNationality(),
    // this.getDateOfBirth(),
    // };
    // return this.passport;
  }

  public void setPassport() {
    passport[0] = name;
    passport[1] = nationality;
    passport[2] = dateOfBirth;
    // Alternate way...
    // passport = new String[] { name, nationality, dateOfBirth };
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getNationality() {
    return this.nationality;
  }

  public void setNationality(String nationality) {
    this.nationality = nationality;
  }

  public String getDateOfBirth() {
    return this.dateOfBirth;
  }

  public void setDateOfBirth(String dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public int getSeatNumber() {
    return this.seatNumber;
  }

  public void setSeatNumber(int seatNumber) {
    this.seatNumber = seatNumber;
  }

  public String toString() {
    return ("Name: " +
        this.name +
        "\n" +
        "Nationality: " +
        this.nationality +
        "\n" +
        "Date of Birth: " +
        this.dateOfBirth +
        "\n" +
        "Seat Number: " +
        this.seatNumber +
        "\n" +
        "Passport: " +
        Arrays.toString(passport) +
        "\n");
  }
}
