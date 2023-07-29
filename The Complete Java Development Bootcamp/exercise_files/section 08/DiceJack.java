import java.util.Scanner;

public class DiceJack {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter three numbers between 1 & 6: \n");
    int num1 = scanner.nextInt();
    int num2 = scanner.nextInt();
    int num3 = scanner.nextInt();

    int roll1 = rollDice(1, 6);
    int roll2 = rollDice(1, 6);
    int roll3 = rollDice(1, 6);

    System.out.println(roll1);
    System.out.println(roll2);
    System.out.println(roll3);

    if (isLessThan1(num1, num2, num3) || isHigherThan6(num1, num2, num3)) {
      System.out.println("You entered an invalid range...");
      System.exit(0);
    }

    int sumNumbers = num1 + num2 + num3;
    int sumDiceRolls = roll1 + roll2 + roll3;

    System.out.println(
      "Your sum: " + sumNumbers + "  Computer sum: " + sumDiceRolls
    );

    if (userWon(sumNumbers, sumDiceRolls)) {
      System.out.println("You won!!!");
    } else System.out.println("Better luck next time huh!");

    scanner.close();
  }

  public static boolean isLessThan1(int num1, int num2, int num3) {
    return (num1 < 1 || num2 < 1 || num3 < 1);
  }

  public static boolean isHigherThan6(int num1, int num2, int num3) {
    return (num1 > 6 || num2 > 6 || num3 > 6);
  }

  public static boolean userWon(int sumNumbers, int sumDiceRolls) {
    return (sumNumbers > sumDiceRolls && (sumNumbers - sumDiceRolls) < 3);
  }

  public static int rollDice(int lowestRange, int highestRange) {
    return (int) Math.floor(
      ((Math.random() * (highestRange - lowestRange + 1) + lowestRange))
    );
  }
}
