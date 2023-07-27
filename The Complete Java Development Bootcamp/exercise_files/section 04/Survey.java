import java.util.Scanner;

public class Survey {

  public static void main(String[] args) {
    //*********PART A: PICKING UP THE USER'S ANSWERS*********
    System.out.println("Welcome. Thank you for taking the survey");
    Scanner scanner = new Scanner(System.in);

    int counter = 0;

    System.out.println("\nWhat is your name?");
    String name = scanner.nextLine();
    counter++;

    System.out.println("\nHow much money do you spend on coffee?");
    double coffeePrice = scanner.nextDouble();
    counter++;

    System.out.println("\nHow much money do you spend on fast food?");
    double foodPrice = scanner.nextDouble();
    counter++;

    System.out.println("\nHow many times a week do you buy coffee?");
    int coffeeAmount = scanner.nextInt();
    counter++;

    System.out.println("\nHow many times a week do you buy fast food?");
    int foodAmount = scanner.nextInt();
    counter++;

    scanner.close(); //In order to avoid leak, always close the scanner.

    //*********PART B: RESPONDING TO THE USER**********
    System.out.println(
      "\nThank you " + name + " for answering all " + counter + " questions"
    );
    System.out.println(
      "\nWeekly, you spend $" + (coffeeAmount * coffeePrice) + " on coffee"
    );
    System.out.println(
      "\nWeekly, you spend $" + (foodAmount * foodPrice) + " on food"
    );
  }
}
