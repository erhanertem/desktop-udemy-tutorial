import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;


public class Main {

    static final String SALES = "data/sales.csv"; // Use backslash Windows users

    public static void main(String[] args) {

        try {
            Path path = Paths
                    .get(Thread.currentThread().getContextClassLoader().getResource(SALES).toURI());

            // -> TIME INTENSIVE CALCULATIONS
            // average(path, "Furniture");
            // average(path, "Technology");
            // average(path, "Office Supplies");
            // totalAverage(path);
            Thread thread2 = new Thread(() -> average(path, "Furniture"));
            Thread thread3 = new Thread(() -> average(path, "Technology"));
            Thread thread4 = new Thread(() -> average(path, "Office Supplies"));
            Thread thread5 = new Thread(() -> totalAverage(path));
            thread2.start();
            thread3.start();
            thread4.start();
            thread5.start();

            // -> LESS TIME INTENSIVE CALCULATION
            Scanner scan = new Scanner(System.in);
            System.out.print("Please enter your name to access the Global Superstore dataset: ");
            String name = scan.nextLine();
            System.out.println("Access Denied. We apologize for the inconvenience. Have a good day "
                    + name + ".");
            scan.close();
        } catch (URISyntaxException e) {
            System.out.println(e.getMessage());
        }
    }

    /**
     * Function name: average
     * 
     * @param path (Path)
     * @param category (String)
     * @return Double
     * 
     *         Inside the function: 1. Runs through every line from the CSV file as a stream. 2.
     *         Maps every element in the stream to an array of three String values. 3. Filters every
     *         value by the @param category 4. Maps every element in the stream to a double (price *
     *         quantity). 5. Applies the terminal operation average. 6. Returns the average as
     *         double.
     * 
     */

    public static Double average(Path path, String category) {
        try {
            return Files.lines(path).skip(1).map(line -> line.split(","))
                    .filter(values -> values[0].equals(category))
                    // .mapToDouble(values -> Double.valueOf(values[1]) * Double.valueOf(values[2]))
                    .mapToDouble(
                            values -> Double.parseDouble(values[1]) * Double.parseDouble(values[2]))
                    .average().getAsDouble();

        } catch (IOException e) {
            System.out.println(e.getMessage());
            return 0.0;
        }
    }

    /**
     * Function name: totalAverage
     * 
     * @param path (Path)
     * @return Double
     * 
     *         Inside the function: 1. Runs through every line from the CSV file as a stream. 2.
     *         Maps every element in the stream to an array of three values. 3. Maps every element
     *         in the stream to a double: (price * quantity). 4. Applies the terminal operation
     *         average. 5. Returns the average as double.
     */
    public static Double totalAverage(Path path) {
        try {
            return Files.lines(path).skip(1).map(line -> line.split(","))
                    .mapToDouble(
                            values -> Double.parseDouble(values[1]) * Double.parseDouble(values[2]))
                    .average().getAsDouble();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return 0.0;
        }
    }

}
