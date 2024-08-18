import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.FutureTask;


public class Main {

    static final String SALES = "data/sales.csv"; // Use backslash Windows users

    static double furniture = 0.;
    static double technology = 0.;
    static double supplies = 0.;
    static double average = 0.;


    public static void main(String[] args) {

        try {
            Path path = Paths
                    .get(Thread.currentThread().getContextClassLoader().getResource(SALES).toURI());
            // -> TIME INTENSIVE CALCULATIONS
            // CALLABLE TASK - POOL THREAD
            int nThreads = Runtime.getRuntime().availableProcessors();
            ExecutorService executor = Executors.newFixedThreadPool(nThreads);
            Future<Double> future1 = executor.submit(() -> average(path, "Furniture"));
            Future<Double> future2 = executor.submit(() -> average(path, "Technology"));
            Future<Double> future3 = executor.submit(() -> average(path, "Office Supplies"));
            Future<Double> future4 = executor.submit(() -> totalAverage(path));

            // -> LESS TIME INTENSIVE CALCULATION
            Scanner scan = new Scanner(System.in);
            System.out.print("Please enter your name to access the Global Superstore dataset: ");
            String name = scan.nextLine();
            try {
                furniture = future1.get();
                technology = future2.get();
                supplies = future3.get();
                average = future4.get();
            } catch (InterruptedException | ExecutionException e) {
                System.out.println(e.getMessage());
            } finally {
                executor.shutdown();
            }

            System.out.println(
                    "\nThank you " + name + ". The average sales for Global Superstore are:\n");
            System.out.println("Average Furniture Sales: " + furniture);
            System.out.println("Average Technology Sales: " + technology);
            System.out.println("Average Office Supplies Sales: " + supplies);
            System.out.println("Total Average: " + average);

            scan.close();

        } catch (URISyntaxException e) {
            System.out.println(e.getMessage());
        } catch (InterruptedException e) {
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
        if (Thread.currentThread().isInterrupted()) {
            return 0.;
        }
        try {
            return Files.lines(path).skip(1).map(line -> line.split(","))
                    .filter(values -> values[0].equals(category))
                    // .mapToDouble(values -> Double.valueOf(values[1]) *
                    // Double.valueOf(values[2]))
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
