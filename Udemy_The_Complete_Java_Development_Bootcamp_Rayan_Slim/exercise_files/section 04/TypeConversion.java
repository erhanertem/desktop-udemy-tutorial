public class TypeConversion {

  public static void main(String[] args) {
    int ants = 2000;
    int purchasedBlocksOfCheese = 1;

    System.out.println(
      "There are " +
      ants +
      " ants, and " +
      purchasedBlocksOfCheese +
      " block of cheese."
    );
    System.out.println(
      "Each ant carried " +
      ((double) purchasedBlocksOfCheese / ants) +
      " from the total cheese amount"
    );
    System.out.println(2 / 5); //By default numbers are ints-ints
    System.out.println(2.0 / 5); //By default numbers are double-ints
    System.out.println(487 % 32); //By default numbers are double-ints
    System.out.println(487 / 32); //By default numbers are double-ints
    double salary = 5423.94;
    int roundedSalary = (int) salary;
    System.out.println(
      "Mortgage Broker: What is your monthly salary in dollars?"
    );
    System.out.println("My monthly salary is: " + roundedSalary);
  }
}
