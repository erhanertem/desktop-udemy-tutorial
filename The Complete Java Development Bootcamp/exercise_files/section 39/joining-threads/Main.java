import java.util.LinkedHashMap;
import java.util.Scanner;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.FutureTask;

public class Main {

    // static final double TARGET = 0.5;
    static double[] targets = new double[] {0.5, 0.8, 0.3};
    static final double PRECISION = 0.0000001;
    static double result = 0;

    // //RUNNABLE TASKING
    // public static void main(String[] args) {

    // // -->CREATE THREAD2 - LONG TASK
    // Runnable runnable = () -> result = generateNumber();
    // Thread thread2 = new Thread(runnable);
    // // -->INITIATE THREAD2
    // thread2.start();

    // // -->BY THE MEANTIME DO SOME OTHER TASK
    // Scanner scan = new Scanner(System.in);
    // System.out.println("Please enter a name to generate a number: ");
    // scan.nextLine();
    // scan.close();
    // // -->WAIT TILL THREAD2 DIES AND JOIN MAIN THREAD
    // try {
    // thread2.join();
    // } catch (InterruptedException e) {
    // System.out.println(e.getMessage());
    // }
    // // calculate precision level here...
    // double precision = difference(result);
    // System.out.println("The computer returned a value of: " + result);
    // System.out.println("The value was generated to a precision of : " + precision);
    // }

    // CALLABLE TASKING - THREAD POOL
    public static void main(String[] args) {
        // ->LEARN HOW MAY CORES THE PC HAVE?
        int numThreads = Runtime.getRuntime().availableProcessors();
        // -->CREATE THREAD POOL OF THE NUMBER OF CORES
        ExecutorService executor = Executors.newFixedThreadPool(numThreads);
        Future<Double> future = executor.submit(() -> generateNumber(0));
        Future<Double> future2 = executor.submit(() -> generateNumber(1));
        Future<Double> future3 = executor.submit(() -> generateNumber(2));
        // -> WAIT FOR THE CALLABLE TASKS TO FINISH OFF
        try {
            future.get();
            future2.get();
            future3.get();
            // -->KILL THE POOL
            executor.shutdown();
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e.getMessage());
        }
        System.out.println("Finished running background operations");
    }

    /**
     * Function name: generateNumber
     * 
     * @return double
     * 
     *         Inside the function: 1. Generates a number close to the TARGET to a precision of
     *         PRECISION.
     * 
     */
    public static double generateNumber(int index) {
        double number = Math.random();
        double difference = difference(number, index);
        while (difference > PRECISION) {
            number = Math.random();
            difference = difference(number, index);
        }
        return number;

    }

    public static double difference(double number, int index) {
        // return Math.abs(TARGET - number);
        return Math.abs(targets[index] - number);
    }

}
