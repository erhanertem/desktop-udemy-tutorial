import java.util.Arrays;
import java.util.Scanner;

public class Main_old {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);

    Car[] cars = new Car[] {
        new Car("Nissan", 5000, 2020, "red", new String[] {"tires", "keys"}),
        new Car("Dodge", 8500, 2019, "blue", new String[] {"tires", "keys"}),
        new Car("Nissan", 5000, 2017, "yellow", new String[] {"tires", "filter"}),
        new Car("Honda", 7000, 2019, "orange", new String[] {"tires", "filter"}),
        new Car("Mercedes", 12000, 2015, "jet black",
            new String[] {"tires", "filter", "transmission"})
    };

    Dealership dealership = new Dealership(cars);

    System.out.println("\n ****** JAVA DEALERSHIP! ****** \n");
    System.out.println("Feel free to browse through our collection of cars.\n");
    System.out.println(dealership);
    System.out.println("Which car are you interested in? (0 - 4).\n");
    int index = scan.nextInt();

    // sell car here...
    dealership.sell(index);

    scan.close();

    // cars[3] = new Car("Hyundai", 7000, 2019, "orange", new String[] { "tires",
    // "filter" });
    // cars[3].setColor("Blue");
    // System.out.println(cars[3]);

    // String[] spareParts = new String[] { "Tires", "Spare keys" };
    // Car nissan = new Car("Nissan", 10000, 2020, "Green", spareParts);
    // Car dodge = new Car("Dodge", 11000, 2019, "Blue", spareParts);

    // System.out.println(nissan);

    // spareParts[0] = "Filter"; // Only affects the base reference, the new object
    // arrays are not affected.

    // Car nissan2 = new Car(nissan);
    // // Car nissan2 = nissan;

    // nissan.drive();

    // // nissan2.setColor("Yellow");
    // // nissan.setColor("Orange");
    // // nissan2.setColor("Blue");
    // // nissan.setColor("Purple");
    // // nissan2.setColor("Fuchsia");
    // // nissan.setColor("Beige");

    // // Car nissan = new Car();
    // // nissan.make = "Nissan";
    // // nissan.price = 10000;
    // // nissan.year = 2020;
    // // nissan.color = "Green";
    // // Car dodge = new Car();
    // // dodge.make = "Dodge";
    // // dodge.price = 11000;
    // // dodge.year = 2019;
    // // dodge.color = "Blue";

    // nissan.setColor("Pink");
    // dodge.setPrice(nissan.getPrice() * 0.9);

    // System.out.println(
    // "This " +
    // nissan.getMake() +
    // " is worth $" +
    // nissan.getPrice() +
    // ". It was built in " +
    // nissan.getYear() +
    // ". It is " +
    // nissan.getColor() +
    // ".\n");
    // // System.out.println(
    // // "This " +
    // // nissan.make +
    // // " is worth $" +
    // // nissan.price +
    // // ". It was built in " +
    // // nissan.year +
    // // ". It is " +
    // // nissan.color +
    // // ".\n"
    // // );
    // System.out.println(
    // "This " +
    // dodge.getMake() +
    // " is worth $" +
    // dodge.getPrice() +
    // ". It was built in " +
    // dodge.getYear() +
    // ". It is " +
    // dodge.getColor() +
    // ".\n");
    // // System.out.println(
    // // "This " +
    // // dodge.make +
    // // " is worth $" +
    // // dodge.price +
    // // ". It was built in " +
    // // dodge.year +
    // // ". It is " +
    // // dodge.color +
    // // ".\n"
    // // );

    // // Person person = new Person();
    // // System.out.println(person.name);
    // // System.out.println(person.nationality);
    // // System.out.println(person.dateOfBirth);
    // // System.out.println(person.passport);
    // // System.out.println(person.seatNumber);
    // // person.name = "Erhan";
    // // person.nationality = "Turkish";
    // // person.dateOfBirth = "1/1/1111";
    // // person.passport =
    // // new String[] { person.name, person.nationality, person.dateOfBirth };
    // // person.seatNumber = 11;

    // Person person = new Person("Erhan", "Turkish", "1/1/1111", 11);
    // if (person.applyPassport()) {
    // person.setPassport();
    // }
    // Person twin = new Person(person);
    // twin.setName("Jamal");
    // if (person.applyPassport()) {
    // person.setPassport();
    // }
    // twin.setSeatNumber(3);
    // twin.chooseSeat();

    // System.out.println(
    // "Name: " +
    // person.getName() +
    // "\n" +
    // "Nationality: " +
    // person.getNationality() +
    // "\n" +
    // "Date of Birth: " +
    // person.getDateOfBirth() +
    // "\n" +
    // "Seat Number: " +
    // person.getSeatNumber() +
    // "\n" +
    // "Passport: " +
    // Arrays.toString(person.getPassport()) +
    // "\n");
    // System.out.println(
    // "Name: " +
    // twin.getName() +
    // "\n" +
    // "Nationality: " +
    // twin.getNationality() +
    // "\n" +
    // "Date of Birth: " +
    // twin.getDateOfBirth() +
    // "\n" +
    // "Seat Number: " +
    // twin.getSeatNumber() +
    // "\n" +
    // "Passport: " +
    // Arrays.toString(twin.getPassport()) +
    // "\n");

    // System.out.println("*******************");
    // System.out.println(person);
    // // System.out.println(person.getName());
    // // System.out.println(person.getNationality());
    // // System.out.println(person.getDateOfBirth());
    // // System.out.println(Arrays.toString(person.getPassport()));
    // // System.out.println(person.getSeatNumber());
    // // person.passport =
    // // new String[] { person.name, person.nationality, person.dateOfBirth };
    // // System.out.println(person.name);
    // // System.out.println(person.nationality);
    // // System.out.println(person.dateOfBirth);
    // // System.out.println(Arrays.toString(person.passport));
    // // System.out.println(person.seatNumber);
  }
}
