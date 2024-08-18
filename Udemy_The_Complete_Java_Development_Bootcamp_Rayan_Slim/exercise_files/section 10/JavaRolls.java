import java.util.Scanner;

public class JavaRolls {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    // See Learn the Part for detailed instructions.

    int diceRoll;
    int score = 0;

    System.out.println("Let's play Rolling Java. Type anything to start.");
    scan.nextLine();
    System.out.println(
      "Great, here are the rules:\n- If you roll a 6, the game stops.\n- If you roll a 4, nothing happens.\n- Otherwise, you get 1 point.\nYou must collect at least 3 points to win. Enter anything to roll:"
    );
    scan.nextLine();

    scan.close();

    while (true) {
      diceRoll = rollDice();
      System.out.println("You rolled a " + diceRoll);

      if (diceRoll == 6) {
        System.out.print("End of Game - Score:" + score + " ");
        if (score >= 3) {
          System.out.print("Wow,that's lucky. You win!");
        } else {
          System.out.print("Tough luck, you lose:(");
        }
        System.exit(0);
      } else if (diceRoll == 4) {
        System.out.println("Zero points , keep rolling");
      } else {
        System.out.println("One point, keep rolling");
        score++;
      }
    }
  }

  public static int rollDice() {
    return (int) Math.floor(Math.random() * (6 - 1 + 1) + 1);
  }
}
